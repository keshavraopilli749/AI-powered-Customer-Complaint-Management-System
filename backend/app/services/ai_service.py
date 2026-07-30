import time
import uuid
import logging
from typing import Dict, Any
from app.ai.graph.complaint_graph import complaint_graph
from app.ai.graph.state import DocumentState

logger = logging.getLogger("qms_api")

class AIService:
    @staticmethod
    def process_document(raw_text: str) -> Dict[str, Any]:
        """
        Takes raw document text, runs it through the LangGraph AI pipeline,
        and returns the structured JSON output.
        """
        document_id = str(uuid.uuid4())
        start_time = time.time()
        
        logger.info(f"Starting AI pipeline for document {document_id}")
        
        initial_state = DocumentState(
            document_id=document_id,
            raw_text=raw_text,
            cleaned_text=None,
            extracted_data=None,
            summary=None,
            patient_risk=None,
            business_risk=None,
            regulatory_risk=None,
            overall_risk=None,
            root_cause_suggestion=None,
            capa_suggestion=None,
            validation_errors=[],
            missing_fields=[],
            processing_time_ms=0,
            status="processing",
            error_message=None
        )
        
        try:
            # Execute the LangGraph pipeline
            final_state = complaint_graph.invoke(initial_state)
            
            end_time = time.time()
            processing_time_ms = int((end_time - start_time) * 1000)
            final_state["processing_time_ms"] = processing_time_ms
            
            if final_state.get("status") == "failed":
                logger.error(f"AI Pipeline failed: {final_state.get('error_message')}")
                return final_state
                
            final_state["status"] = "completed"
            logger.info(f"AI Pipeline completed in {processing_time_ms}ms")
            
            # For the API response, we might want to convert Pydantic objects to dicts
            if final_state.get("extracted_data"):
                final_state["extracted_data"] = final_state["extracted_data"].model_dump()
                
            return final_state
            
        except Exception as e:
            logger.error(f"Fatal error in AI Pipeline: {str(e)}")
            initial_state["status"] = "failed"
            initial_state["error_message"] = str(e)
            return initial_state
