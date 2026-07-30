import os
import sys

# Add the server directory to python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
# Import ALL models so they are registered with Base
from app.models.base import Base
from app.models.user import User
from app.models.customer import Customer
from app.models.complaint import Complaint
from app.models.attachment import ComplaintAttachment
from app.models.ai_response import AIResponse
from app.models.investigation import Investigation
from app.models.risk_assessment import RiskAssessment
from app.models.audit_log import AuditLog

import bcrypt
def get_password_hash(password: str) -> str:
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
DATABASE_URL = os.environ.get("DATABASE_URL")

def main():
    print("Connecting to Neon Database...")
    engine = create_engine(DATABASE_URL)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    
    print("Creating tables...")
    Base.metadata.create_all(bind=engine)
    print("Tables created successfully.")
    
    db = SessionLocal()
    try:
        # Check if admin user exists
        admin = db.query(User).filter(User.email == "keshavraoplacement@gmail.com").first()
        if not admin:
            print("Creating Admin User...")
            admin = User(
                email="keshavraoplacement@gmail.com",
                hashed_password=get_password_hash("password123"), # Default password
                full_name="Keshavrao Admin",
                role="ADMIN",
                is_active=True
            )
            db.add(admin)
            db.commit()
            db.refresh(admin)
            print(f"Admin user created. ID: {admin.id}")
        else:
            print("Admin user already exists.")
            
        # Seed Complaints if none exist
        if db.query(Complaint).count() == 0:
            print("Seeding complaints...")
            complaints = [
                Complaint(
                    complaint_number="CMP-2026-001",
                    product_name="Aspirin 500mg",
                    batch_number="45A992",
                    complaint_description="Patient reported that the tablets in the blister pack appear yellowish instead of the standard white. The seal was intact.",
                    status="Investigating",
                    priority="High",
                    created_by_id=admin.id
                ),
                Complaint(
                    complaint_number="CMP-2026-002",
                    product_name="Vitamin C Complex",
                    batch_number="VC-2026-X1",
                    complaint_description="The outer carton was fine but the inner bottle seal was already broken upon opening.",
                    status="New",
                    priority="Medium",
                    created_by_id=admin.id
                )
            ]
            db.add_all(complaints)
            db.commit()
            print("Successfully seeded complaints.")
        else:
            print("Complaints already exist, skipping seed.")
            
        print("Database setup complete!")
    except Exception as e:
        print(f"An error occurred: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    main()
