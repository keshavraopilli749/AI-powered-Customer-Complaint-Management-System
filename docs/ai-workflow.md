# AI Workflow (LangGraph)

The AI Copilot uses **LangGraph** to process documents systematically, reducing hallucinations by breaking the task into discrete nodes.

## Pipeline Flow

1.  **Extract Data Node**: The raw document text is sent to the LLM (Groq) with a strict schema. The LLM extracts specific fields (Product, Batch, Customer ID, Description) and returns valid JSON.
2.  **Validate Data Node**: A logic node checks the extracted JSON. If required fields are missing, it flags them or attempts a retry.
3.  **Calculate Risk Node**: Based on the extracted description and product, the LLM determines Patient Risk and Regulatory Risk (High/Medium/Low).
4.  **Generate CAPA Node**: Suggests Corrective and Preventive Actions (CAPA).
5.  **Summarize Node**: Creates a concise executive summary of the entire event.

## Why LangGraph?
Traditional LLM chains (like `LLMChain`) are linear and hard to debug. LangGraph models the process as a State Machine. If the extraction fails, we can loop back and retry without restarting the entire process.
