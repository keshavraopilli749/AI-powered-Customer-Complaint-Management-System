from typing import Optional, List
from pydantic import BaseModel, Field

class ComplaintExtractedData(BaseModel):
    """Pydantic model representing the structured output we want from the LLM."""
    
    # Customer Details
    customer_name: Optional[str] = Field(None, description="Full name of the customer or reporter.")
    organization: Optional[str] = Field(None, description="Company or clinic name.")
    email: Optional[str] = Field(None, description="Email address.")
    phone: Optional[str] = Field(None, description="Phone number.")
    
    # Product Details
    product_name: Optional[str] = Field(None, description="The commercial name of the pharmaceutical product.")
    generic_name: Optional[str] = Field(None, description="The generic or chemical name.")
    strength: Optional[str] = Field(None, description="Dosage strength (e.g., 50mg).")
    batch_number: Optional[str] = Field(None, description="Lot or batch number.")
    manufacturing_date: Optional[str] = Field(None, description="Manufacturing date (YYYY-MM-DD or string).")
    expiry_date: Optional[str] = Field(None, description="Expiration date (YYYY-MM-DD or string).")
    
    # Complaint Details
    complaint_category: Optional[str] = Field(None, description="Category (e.g., Adverse Event, Product Quality, Packaging).")
    complaint_type: Optional[str] = Field(None, description="Specific type of complaint.")
    description: Optional[str] = Field(None, description="Full narrative description of the issue.")
    observed_issue: Optional[str] = Field(None, description="Specific defect or issue observed by the reporter.")
    severity: Optional[str] = Field("Minor", description="Severity (Minor, Major, Critical).")
    priority: Optional[str] = Field("Medium", description="Priority level for investigation.")
    quantity_affected: Optional[str] = Field(None, description="Quantity of product affected.")
    complaint_date: Optional[str] = Field(None, description="When the complaint was reported.")
    country: Optional[str] = Field(None, description="Country of origin.")
    
    # Extraction Metadata
    confidence_score: float = Field(..., description="LLM's confidence score (0.0 to 1.0) on the overall extraction quality.")
    missing_critical_fields: List[str] = Field(default_factory=list, description="List of important fields (like product_name, batch_number) that could not be found in the text.")
