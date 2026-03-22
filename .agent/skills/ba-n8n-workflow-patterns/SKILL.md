---
name: ba-n8n-workflow-patterns
description: Proven workflow architectural patterns from real n8n workflows. Use when building new workflows, designing workflow structure, choosing workflow patterns, or asking about webhook processing, HTTP API integration, database operations, AI agent workflows, or scheduled tasks.
version: 1.0.0
author: M2MBA
last-updated: 2026-03-13
---

# Skill: n8n Workflow Patterns (BA Edition)

## Metadata
- **Version**: 1.0.0
- **Author**: M2MBA
- **Last Updated**: 2026-03-13
- **Description**: Proven architectural patterns for building robust n8n workflows.

---

## 🎯 Purpose
Help BA design efficient workflows using 5 core architectural patterns derived from thousands of real-world templates.

---

## 🏗️ The 5 Core Patterns

1. **Webhook Processing** (Most Common)
   - *Flow*: Webhook → Validate → Transform → Respond/Notify
   - *Use*: Form submissions, Slack commands, incoming API events.
2. **HTTP API Integration**
   - *Flow*: Trigger → HTTP Request → Transform → Action → Error Handler
   - *Use*: Syncing data with CRM/ERP, fetching external reports.
3. **Database Operations**
   - *Flow*: Schedule → Query → Transform → Write → Verify
   - *Use*: ETL, data sync, periodic backups.
4. **AI Agent Workflow**
   - *Flow*: Trigger → AI Agent (Model + Tools + Memory) → Output
   - *Use*: Intelligent chat bots, automated classification.
5. **Scheduled Tasks**
   - *Flow*: Schedule → Fetch → Process → Deliver → Log
   - *Use*: Daily/weekly reports, maintenance scripts.

---

## 📋 Creation Checklist for BAs

### 1. Planning
- [ ] Identify the pattern.
- [ ] List required nodes (use `search_nodes`).
- [ ] Plan error handling (Error Trigger/IF).

### 2. Implementation & Validation
- [ ] Authenticate/Configure nodes.
- [ ] Validate each node (`validate_node`).
- [ ] Validate complete workflow (`validate_workflow`).

---

## 📄 Detailed Pattern Reference
- [webhook_processing.md](webhook_processing.md)
- [http_api_integration.md](http_api_integration.md)
- [database_operations.md](database_operations.md)
- [ai_agent_workflow.md](ai_agent_workflow.md)
- [scheduled_tasks.md](scheduled_tasks.md)

---

**Version:** 1.0.0
**Author:** M2MBA
**Last Updated:** 2026-03-13
**Description:** Skill hướng dẫn các mẫu workflow n8n chuẩn cho Business Analyst.
