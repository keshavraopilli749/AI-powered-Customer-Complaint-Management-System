/**
 * Utility to map backend structured JSON (often snake_case) 
 * to frontend React state if necessary. 
 * Since our backend schemas match our frontend requirements closely, 
 * this mainly serves as a safe extraction layer.
 */

export const mapAIResponseToForm = (aiData) => {
    if (!aiData) return {};
    
    // Map extracted fields
    const fields = aiData.extracted_fields || {};
    
    return {
        productName: fields.product_name || '',
        genericName: fields.generic_name || '',
        strength: fields.strength || '',
        batchNumber: fields.batch_number || '',
        manufacturingDate: fields.manufacturing_date || '',
        expiryDate: fields.expiry_date || '',
        complaintCategory: fields.complaint_category || '',
        complaintType: fields.complaint_type || '',
        description: fields.description || '',
        observedIssue: fields.observed_issue || '',
        severity: fields.severity || 'Minor',
        priority: fields.priority || 'Medium',
        customerName: fields.customer_name || '',
        organization: fields.organization || '',
        email: fields.email || '',
        phone: fields.phone || ''
    };
};
