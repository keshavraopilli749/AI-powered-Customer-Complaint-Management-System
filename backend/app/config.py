from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "AI-powered Customer Complaint Management System"
    database_url: str = "sqlite:///./complaints.db"
    
    class Config:
        env_file = ".env"

settings = Settings()
