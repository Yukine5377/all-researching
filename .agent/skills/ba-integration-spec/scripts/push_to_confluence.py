#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script đẩy Integration Specification lên Confluence
Tạo page mới với nội dung đầy đủ A→H

Cấu hình: file confluence.config.json (xem SKILL.md – Cấu hình Confluence).
"""

import sys
import os
import re
import json
import argparse
import time
from pathlib import Path
from datetime import datetime

try:
    import requests
except ImportError:
    print("Đang cài đặt thư viện requests...")
    os.system("pip install requests")
    import requests

try:
    from markdown import markdown
    from markdown.extensions import tables, fenced_code
except ImportError:
    print("Đang cài đặt thư viện markdown...")
    os.system("pip install markdown")
    from markdown import markdown
    from markdown.extensions import tables, fenced_code

import subprocess
import base64

# Hàm kiểm tra mermaid-cli khi cần dùng (không check ở module level)
def check_mermaid_available():
    """Kiểm tra xem có mermaid-cli không."""
    try:
        # Trên Windows, cần dùng shell=True hoặc tìm đường dẫn đầy đủ
        import platform
        if platform.system() == "Windows":
            # Thử với shell=True trên Windows
            result = subprocess.run(
                "mmdc --version", 
                shell=True,
                capture_output=True, 
                timeout=5,
                text=True
            )
        else:
            result = subprocess.run(
                ["mmdc", "--version"], 
                capture_output=True, 
                timeout=5,
                text=True
            )
        if result.returncode == 0:
            return True, "cli"
    except (FileNotFoundError, subprocess.TimeoutExpired, Exception) as e:
        pass
    
    # Thử playwright nếu có
    try:
        import playwright
        return True, "playwright"
    except ImportError:
        pass
    
    return False, None


# Thư mục gốc của skill (chứa confluence.config.example.json)
SCRIPT_DIR = Path(__file__).resolve().parent
SKILL_DIR = SCRIPT_DIR.parent
# Tìm config ở cả thư mục scripts và thư mục skill
CONFIG_PATHS = [
    SCRIPT_DIR / "confluence.config.json",  # Ưu tiên: trong thư mục scripts
    SKILL_DIR / "confluence.config.json",  # Thứ hai: trong thư mục skill
]


def load_confluence_config(config_path: str = None) -> dict:
    """
    Đọc cấu hình Confluence từ file JSON hoặc biến môi trường.
    Ưu tiên: CLI/config file > file trong scripts/ > file trong skill/ > env vars.

    Returns:
        dict: { "url", "space_key", "username", "api_token", "parent_id" (optional) }
    """
    cfg = {}

    # 1. Nếu có config_path từ CLI, ưu tiên dùng
    if config_path:
        path = Path(config_path)
        if path.is_file():
            try:
                with open(path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                cfg = data.get("confluence", data)
            except Exception as e:
                print(f"⚠️  Không đọc được config từ {path}: {e}")
    else:
        # 2. Tìm trong các vị trí mặc định (scripts/ trước, skill/ sau)
        for path in CONFIG_PATHS:
            if path.is_file():
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        data = json.load(f)
                    cfg = data.get("confluence", data)
                    print(f"✓ Đã tìm thấy config tại: {path}")
                    break
                except Exception as e:
                    print(f"⚠️  Không đọc được config từ {path}: {e}")

    # Chuẩn hóa: parent_id rỗng thành None
    if cfg.get("parent_id") == "":
        cfg["parent_id"] = None

    return cfg


def read_markdown_file(file_path: str) -> str:
    """Đọc file markdown."""
    with open(file_path, "r", encoding="utf-8") as f:
        return f.read()


def extract_system_name(content: str) -> str:
    """Lấy tên hệ thống từ content hoặc path."""
    match = re.search(r"Tên hệ thống[:\s]+(.+?)(?:\n|$)", content, re.IGNORECASE)
    if match:
        return match.group(1).strip()
    return "Hệ thống đối tác"


def markdown_to_confluence_storage(md_content: str) -> str:
    """
    Convert markdown sang Confluence Storage Format.
    Confluence dùng format đặc biệt, nhưng có thể dùng wiki markup hoặc HTML.
    """
    # Convert markdown sang HTML trước
    html = markdown(
        md_content,
        extensions=[
            "tables",
            "fenced_code",
            "codehilite",
            "nl2br",
        ],
    )
    
    # Convert HTML sang Confluence Storage Format (wiki markup đơn giản)
    # Hoặc có thể dùng HTML trực tiếp nếu Confluence hỗ trợ
    
    # Xử lý code blocks (Mermaid) - dùng macro mermaidjs
    def replace_mermaid(match):
        mermaid_code = match.group(1).strip()
        
        # Escape JSON special chars trong Mermaid code
        # Cần escape cho JSON: ", \, \n, \r, \t
        mermaid_code_json = mermaid_code.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n").replace("\r", "\\r").replace("\t", "\\t")
        
        # Tạo fileName từ timestamp
        file_name = f"mermaid_{int(time.time() * 1000)}"
        
        # Tạo JSON cho diagramDefinition
        diagram_json = f'{{"diagramDefinition":"{mermaid_code_json}"}}'
        
        # Dùng macro mermaidjs
        return f'''<ac:structured-macro ac:name="mermaidjs" ac:schema-version="1" data-layout="default">
<ac:parameter ac:name="fileName">{file_name}</ac:parameter>
<ac:parameter ac:name="theme">default</ac:parameter>
<ac:parameter ac:name="version">2</ac:parameter>
<ac:plain-text-body><![CDATA[{diagram_json}]]></ac:plain-text-body>
</ac:structured-macro>'''
    
    html = re.sub(
        r'<pre><code class="language-mermaid">(.*?)</code></pre>',
        replace_mermaid,
        html,
        flags=re.DOTALL,
    )
    
    # Xử lý code blocks thường
    html = re.sub(
        r'<pre><code>(.*?)</code></pre>',
        r'<ac:structured-macro ac:name="code"><ac:plain-text-body><![CDATA[\1]]></ac:plain-text-body></ac:structured-macro>',
        html,
        flags=re.DOTALL,
    )
    
    # Convert tables sang Confluence format
    html = re.sub(
        r'<table>',
        r'<table class="confluenceTable">',
        html,
    )
    
    return html


def find_page_by_title(url: str, space_key: str, title: str, username: str, api_token: str) -> dict:
    """
    Tìm page theo title trong space.
    
    Returns:
        dict: Page info nếu tìm thấy, None nếu không
    """
    url = url.rstrip("/")
    api_url = f"{url}/rest/api/content"
    auth = (username, api_token)
    
    params = {
        "title": title,
        "spaceKey": space_key,
        "expand": "version",
    }
    
    response = requests.get(api_url, params=params, auth=auth)
    
    if response.status_code == 200:
        results = response.json().get("results", [])
        if results:
            return results[0]  # Trả về page đầu tiên tìm thấy
    return None


def create_or_update_confluence_page(
    url: str,
    space_key: str,
    title: str,
    content: str,
    username: str,
    api_token: str,
    parent_id: str = None,
) -> dict:
    """
    Tạo page mới hoặc cập nhật page đã tồn tại trên Confluence.
    
    Args:
        url: Confluence base URL (vd: https://your-company.atlassian.net)
        space_key: Space key (vd: PROJ, DOCS)
        title: Tiêu đề page
        content: Nội dung (HTML/Storage Format)
        username: Confluence username (email)
        api_token: API token
        parent_id: ID của parent page (nếu muốn tạo page con)
    
    Returns:
        dict: Response từ Confluence API
    """
    # Remove trailing slash
    url = url.rstrip("/")
    
    # API endpoint
    api_url = f"{url}/rest/api/content"
    
    # Auth
    auth = (username, api_token)
    
    # Headers
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
    
    # Tìm page đã tồn tại
    existing_page = find_page_by_title(url, space_key, title, username, api_token)
    
    if existing_page:
        # Update page đã tồn tại
        page_id = existing_page["id"]
        version = existing_page["version"]["number"]
        
        body = {
            "id": page_id,
            "type": "page",
            "title": title,
            "version": {"number": version + 1},
            "body": {
                "storage": {
                    "value": content,
                    "representation": "storage",
                }
            },
        }
        
        # Labels
        system_name_slug = re.sub(r"[^a-zA-Z0-9]+", "-", title.lower())
        body["metadata"] = {
            "properties": {
                "labels": [
                    {"name": "integration"},
                    {"name": "api-spec"},
                    {"name": system_name_slug[:20]},
                ]
            }
        }
        
        # PUT request để update
        update_url = f"{api_url}/{page_id}"
        response = requests.put(update_url, json=body, headers=headers, auth=auth)
        
        if response.status_code not in [200, 201]:
            error_msg = f"ERROR: Không thể cập nhật page trên Confluence.\n"
            error_msg += f"Status Code: {response.status_code}\n"
            error_msg += f"Response: {response.text}"
            raise Exception(error_msg)
        
        print(f"✓ Đã cập nhật page đã tồn tại (ID: {page_id})")
        return response.json()
    else:
        # Tạo page mới
        body = {
            "type": "page",
            "title": title,
            "space": {"key": space_key},
            "body": {
                "storage": {
                    "value": content,
                    "representation": "storage",
                }
            },
        }
        
        # Nếu có parent_id
        if parent_id:
            body["ancestors"] = [{"id": parent_id}]
        
        # Labels
        system_name_slug = re.sub(r"[^a-zA-Z0-9]+", "-", title.lower())
        body["metadata"] = {
            "properties": {
                "labels": [
                    {"name": "integration"},
                    {"name": "api-spec"},
                    {"name": system_name_slug[:20]},  # Limit label length
                ]
            }
        }
        
        # POST request
        response = requests.post(api_url, json=body, headers=headers, auth=auth)
        
        if response.status_code not in [200, 201]:
            error_msg = f"ERROR: Không thể tạo page trên Confluence.\n"
            error_msg += f"Status Code: {response.status_code}\n"
            error_msg += f"Response: {response.text}"
            raise Exception(error_msg)
        
        print("✓ Đã tạo page mới")
        return response.json()


def main():
    parser = argparse.ArgumentParser(
        description="Đẩy Integration Specification lên Confluence",
        epilog="Cấu hình: confluence.config.json (hoặc --config <path>). Xem SKILL.md.",
    )
    parser.add_argument("file", help="Đường dẫn file markdown tích hợp")
    parser.add_argument(
        "--config", "-c",
        default=None,
        help="Đường dẫn file config JSON (mặc định: tìm trong scripts/ hoặc skill/)",
    )
    
    args = parser.parse_args()
    
    # Load config
    config = load_confluence_config(args.config)
    
    # Validate bắt buộc
    required = ["url", "space_key", "username", "api_token"]
    missing = [k for k in required if not config.get(k)]
    if missing:
        print("ERROR: Thiếu cấu hình Confluence. Cần có: " + ", ".join(required))
        print("\nCấu hình qua file config:")
        print("  1. Copy confluence.config.example.json -> confluence.config.json (trong thư mục skill)")
        print("  2. Sửa confluence.config.json, điền url, space_key, username, api_token")
        print("  3. Chạy: python push_to_confluence.py <file> [--config <path>]")
        print("\nXem thêm: SKILL.md – Cấu hình Confluence.")
        sys.exit(1)
    
    # Đọc file
    if not os.path.exists(args.file):
        print(f"ERROR: Không tìm thấy file: {args.file}")
        sys.exit(1)
    
    md_content = read_markdown_file(args.file)
    
    # Extract system name
    system_name = extract_system_name(md_content)
    
    # Title
    title = f"Tích hợp API - {system_name} - {datetime.now().strftime('%Y-%m-%d')}"
    
    # Convert markdown sang Confluence format
    print("Đang convert markdown sang Confluence format...")
    print("✓ Sử dụng macro mermaidjs để hiển thị Mermaid diagram")
    confluence_content = markdown_to_confluence_storage(md_content)
    
    # Tạo hoặc cập nhật page
    print(f"Đang tạo/cập nhật page trên Confluence: {title}...")
    try:
        result = create_or_update_confluence_page(
            url=config["url"],
            space_key=config["space_key"],
            title=title,
            content=confluence_content,
            username=config["username"],
            api_token=config["api_token"],
            parent_id=config.get("parent_id"),
        )
        
        page_id = result.get("id")
        page_url = result.get("_links", {}).get("webui", "")
        base_url = config["url"].rstrip("/")
        
        if page_url and not page_url.startswith("http"):
            page_url = f"{base_url}{page_url}"
        
        print("\n" + "="*60)
        print("SUCCESS: Đã tạo page trên Confluence!")
        print("="*60)
        print(f"Title: {title}")
        print(f"Page ID: {page_id}")
        print(f"URL: {page_url}")
        print("="*60)
        
    except Exception as e:
        print(f"\nERROR: {str(e)}")
        sys.exit(1)


if __name__ == "__main__":
    main()
