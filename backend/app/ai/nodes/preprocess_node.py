from app.ai.graph.state import DocumentState

def preprocess_node(state: DocumentState) -> DocumentState:
    """
    Cleans and normalizes the raw text before passing it to the LLM.
    Removes excess whitespace, non-printable characters, etc.
    """
    raw = state.get("raw_text", "")
    if not raw:
        state["error_message"] = "No raw text provided."
        state["status"] = "failed"
        return state
        
    # Basic cleaning
    cleaned = " ".join(raw.split())
    state["cleaned_text"] = cleaned
    return state
