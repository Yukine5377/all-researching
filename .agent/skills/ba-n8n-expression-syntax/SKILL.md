---
name: ba-n8n-expression-syntax
description: Validate n8n expression syntax and fix common errors. Use when writing n8n expressions, using {{}} syntax, accessing $json/$node variables, troubleshooting expression errors, or working with webhook data in workflows.
version: 1.0.0
author: M2MBA
last-updated: 2026-03-13
---

# Skill: n8n Expression Expert (BA Edition)

## Metadata
- **Version**: 1.0.0
- **Author**: M2MBA
- **Last Updated**: 2026-03-13
- **Description**: Expert guide for writing correct n8n expressions in workflows, optimized for Business Analysts.

---

## 🎯 Purpose
Guide Business Analysts in writing flawless n8n expressions. This skill ensures correct syntax, proper data access (especially from webhooks), and troubleshooting of common expression errors.

---

## 📋 Core Variable Reference

### $json - Current Node Output
Access data from the current node item.
- `{{$json.fieldName}}`
- `{{$json.nested.property}}`

### $node - Reference Other Nodes
Access data from any previous node in the workflow.
- `{{$node["Node Name"].json.fieldName}}`
- **Important**: Node names are case-sensitive and must be in quotes.

### $now - Timestamps
- `{{$now}}` - Current time
- `{{$now.toFormat('yyyy-MM-dd')}}` - Formatted date

---

## 🚨 CRITICAL: Webhook Data Structure
**Most Common Mistake**: Webhook data is **NOT** at the root of `$json`. It is nested under `.body`.

```javascript
❌ WRONG: {{$json.email}}
✅ CORRECT: {{$json.body.email}}
```

---

## 📋 Common Patterns & Validation rules

1. **Always Use {{ }}**: All dynamic expressions must be wrapped in double curly braces.
2. **Handle Spaces**: Use bracket notation for fields/nodes with spaces: `{{$json['field name']}}`.
3. **No Braces in Code Nodes**: Code nodes use raw JavaScript. Never use `{{ }}` inside a Code node.
4. **Data Types**:
   - Arrays: `{{$json.items[0].name}}`
   - Strings: `{{$json.email.toLowerCase()}}`
   - Numbers: `{{$json.price * 1.1}}`

---

## 🛠️ Troubleshooting Fix-it Table

| Mistake | Correct Syntax |
|---------|----------------|
| `$json.field` | `{{$json.field}}` |
| `{{$json.field name}}` | `{{$json['field name']}}` |
| `{{$json.name}}` (webhook) | `{{$json.body.name}}` |
| `'={{$json.email}}'` (Code node) | `$json.email` |

---

## 📄 Reference Files
- [COMMON_MISTAKES.md](COMMON_MISTAKES.md) - Deep dive into error patterns.
- [EXAMPLES.md](EXAMPLES.md) - Real-world workflow expression examples.

---

**Version:** 1.0.0
**Author:** M2MBA
**Last Updated:** 2026-03-13
**Description:** Skill chuẩn hóa cú pháp expression n8n cho Business Analyst.
