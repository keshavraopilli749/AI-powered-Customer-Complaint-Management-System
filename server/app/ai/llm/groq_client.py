import os
import logging
from langchain_groq import ChatGroq
from app.core.config import settings

logger = logging.getLogger("qms_api")

def get_llm(model_name: str = "gemma2-9b-it", temperature: float = 0.0) -> ChatGroq:
    """
    Initializes and returns a ChatGroq client.
    If the API key is not set, it logs a warning but initializes anyway 
    (it will fail gracefully upon invocation).
    
    Common models for this pipeline:
    - gemma2-9b-it: Fast, lightweight, great for structured extraction.
    - llama3-70b-8192: Better for complex reasoning (Risk, CAPA).
    """
    api_key = settings.GROQ_API_KEY
    if not api_key or api_key == "placeholder":
        logger.warning("GROQ_API_KEY is not set or is a placeholder. LLM calls will fail.")

    # We use ChatGroq from langchain-groq for native LangChain integration
    return ChatGroq(
        api_key=api_key,
        model_name=model_name,
        temperature=temperature,
        max_tokens=2048,
        # max_retries=3 # LangChain Groq handles basic retries implicitly
    )

def get_structured_llm(schema, model_name: str = "gemma2-9b-it"):
    """
    Returns an LLM bound to a specific Pydantic schema using tool calling.
    """
    llm = get_llm(model_name=model_name)
    # with_structured_output forces the LLM to return JSON matching the schema
    return llm.with_structured_output(schema)
