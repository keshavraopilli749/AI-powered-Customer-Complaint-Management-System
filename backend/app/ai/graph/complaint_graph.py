from langgraph.graph import StateGraph, END
from app.ai.graph.state import DocumentState
from app.ai.nodes.preprocess_node import preprocess_node
from app.ai.nodes.extraction_node import extraction_node
from app.ai.nodes.validation_node import validation_node
from app.ai.nodes.summary_node import summary_node
from app.ai.nodes.risk_node import risk_node
from app.ai.nodes.recommendation_node import recommendation_node

def build_complaint_graph():
    """
    Constructs the LangGraph state machine.
    """
    builder = StateGraph(DocumentState)
    
    # Add Nodes
    builder.add_node("preprocess", preprocess_node)
    builder.add_node("extraction", extraction_node)
    builder.add_node("validation", validation_node)
    builder.add_node("summary", summary_node)
    builder.add_node("risk", risk_node)
    builder.add_node("recommendation", recommendation_node)
    
    # Define Edges (Sequential for simplicity)
    builder.set_entry_point("preprocess")
    builder.add_edge("preprocess", "extraction")
    builder.add_edge("extraction", "validation")
    builder.add_edge("validation", "summary")
    builder.add_edge("summary", "risk")
    builder.add_edge("risk", "recommendation")
    builder.add_edge("recommendation", END)
    
    return builder.compile()

# Instantiate the compiled graph globally so it can be cached
complaint_graph = build_complaint_graph()
