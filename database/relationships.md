# Database Relationships & Constraints

## Overview
The schema is heavily normalized and centralized around the `complaints` table, acting as the primary domain entity. 

## Relationships
1. **Customers to Complaints (1:N)**: A single customer can submit multiple complaints over time. The foreign key `customer_id` is defined on `complaints` with `ON DELETE SET NULL` to preserve historical complaint records even if a customer profile is removed.
2. **Complaints to Attachments (1:N)**: A complaint can have multiple files (PDFs, images) attached. The `complaint_id` FK is `ON DELETE CASCADE`. If a complaint is purged, its attachments follow.
3. **Complaints to AI Responses (1:1)**: The AI copilot processes a complaint and stores its analysis. Because the data structure of AI responses is broad (involving summaries, CAPA suggestions, and JSON fields), it is abstracted into a 1:1 table instead of bloating the main `complaints` table.
4. **Complaints to Investigations (1:1)**: Tracks the root cause analysis and Corrective/Preventive Actions (CAPA).
5. **Complaints to Risk Assessments (1:1)**: Stores computed risk vectors (Patient, Business, Regulatory) and the overall risk score.
6. **Complaints to Audit Logs (1:N)**: CFR 21 Part 11 requires a strict audit trail. Every create, update, and status change is logged as an immutable row in the `audit_logs` table.

## Data Types & Scaling
* **UUIDs**: UUIDv4 is used for all Primary Keys to ensure global uniqueness, easier data migration, and preventing ID guessing (security).
* **JSONB**: Used in `ai_responses.extracted_fields` and `audit_logs.changes`. This allows for flexible schema-less data storage within PostgreSQL for dynamic fields.
* **Timestamps**: All timestamps use `TIMESTAMP WITH TIME ZONE` to ensure standard UTC time logging across distributed systems.
* **Indexes**: Applied to high-cardinality search fields like `complaint_number`, `batch_number`, and `email`.
