# Frontend (Stitch → React)

Thư mục này chứa app web sinh từ thiết kế **Google Stitch** qua MCP.

## `commiz-web`

Vite + React + TypeScript + Tailwind. Màn mẫu: đăng nhập / chào mừng (đồng bộ token màu với Stitch).

```bash
cd commiz-web
npm install
npm run dev
```

## Tham chiếu HTML gốc từ Stitch

- `stitch-login-screen.html` — export HTML của màn tương ứng (để đối chiếu pixel/token).

## MCP Cursor (Stitch)

Sao chép `.cursor/mcp.json.example` thành `.cursor/mcp.json`, điền `STITCH_API_KEY` (không commit file `mcp.json`).
