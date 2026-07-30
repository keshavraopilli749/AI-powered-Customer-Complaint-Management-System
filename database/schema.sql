-- PostgreSQL Enterprise QMS Schema Definition
-- This schema focuses on Complaint Management with AI capabilities.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Customer Table
CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    company VARCHAR(255),
    address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_customers_email ON customers(email);

-- Core Complaint Table
CREATE TABLE complaints (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    complaint_number VARCHAR(50) UNIQUE NOT NULL, -- e.g. CMP-2026-0001
    customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
    
    product_name VARCHAR(255) NOT NULL,
    generic_name VARCHAR(255),
    strength VARCHAR(100),
    batch_number VARCHAR(100),
    manufacturing_date DATE,
    expiry_date DATE,
    
    complaint_category VARCHAR(100),
    complaint_type VARCHAR(100),
    complaint_description TEXT NOT NULL,
    observed_issue TEXT,
    
    severity VARCHAR(50) DEFAULT 'Minor',
    priority VARCHAR(50) DEFAULT 'Medium',
    status VARCHAR(50) DEFAULT 'New',
    
    assigned_to_id UUID,
    created_by_id UUID,
    updated_by_id UUID,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_complaints_number ON complaints(complaint_number);
CREATE INDEX idx_complaints_batch ON complaints(batch_number);
CREATE INDEX idx_complaints_status ON complaints(status);
CREATE INDEX idx_complaints_customer ON complaints(customer_id);

-- Attachments Table
CREATE TABLE complaint_attachments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    complaint_id UUID NOT NULL REFERENCES complaints(id) ON DELETE CASCADE,
    file_name VARCHAR(255) NOT NULL,
    storage_path VARCHAR(1024) NOT NULL,
    content_type VARCHAR(100),
    file_size_bytes BIGINT,
    uploaded_by_id UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_attachments_complaint ON complaint_attachments(complaint_id);

-- AI Response Table (1:1 with Complaint)
CREATE TABLE ai_responses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    complaint_id UUID UNIQUE NOT NULL REFERENCES complaints(id) ON DELETE CASCADE,
    summary TEXT,
    extracted_fields JSONB,
    confidence_score DECIMAL(5,2),
    risk_classification VARCHAR(50),
    root_cause_suggestion TEXT,
    capa_suggestion TEXT,
    prompt_version VARCHAR(50),
    model_used VARCHAR(50),
    processing_time_ms INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Investigation Table (1:1 with Complaint)
CREATE TABLE investigations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    complaint_id UUID UNIQUE NOT NULL REFERENCES complaints(id) ON DELETE CASCADE,
    investigator_id UUID,
    department VARCHAR(100),
    status VARCHAR(50) DEFAULT 'Pending',
    findings TEXT,
    corrective_action TEXT,
    preventive_action TEXT,
    completion_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Risk Assessment Table (1:1 with Complaint)
CREATE TABLE risk_assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    complaint_id UUID UNIQUE NOT NULL REFERENCES complaints(id) ON DELETE CASCADE,
    patient_risk VARCHAR(50),
    business_risk VARCHAR(50),
    regulatory_risk VARCHAR(50),
    overall_risk VARCHAR(50),
    risk_score INTEGER,
    ai_confidence DECIMAL(5,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Audit Log Table (CFR 21 Part 11 Compliance)
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    entity_name VARCHAR(100) NOT NULL,
    entity_id UUID NOT NULL,
    action VARCHAR(50) NOT NULL,
    changes JSONB,
    user_id UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_name, entity_id);
