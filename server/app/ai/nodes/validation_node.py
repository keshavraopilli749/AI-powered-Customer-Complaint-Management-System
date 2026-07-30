from app.ai.graph.state import DocumentState

def validation_node(state: DocumentState) -> DocumentState:
    """
    Validates the structured data returned by the LLM.
    Identifies missing critical fields.
    """
    if state.get("status") == "failed" or not state.get("extracted_data"):
        return state
        
    data = state["extracted_data"]
    missing = []
    
    if not data.product_name:
        missing.append("product_name")
    if not data.batch_number:
        missing.append("batch_number")
    if not data.description:
        missing.append("description")
        
    # Combine with whatever the LLM itself thought was missing
    if data.missing_critical_fields:
        missing.extend(data.missing_critical_fields)
        
    state["missing_fields"] = list(set(missing))
    
    if data.confidence_score < 0.6:
        state["validation_errors"].append("Low confidence score (< 0.6)")
        
    return state
