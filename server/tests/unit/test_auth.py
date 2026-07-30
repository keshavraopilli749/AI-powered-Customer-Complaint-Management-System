from app.auth.password import verify_password, get_password_hash
from app.auth.jwt import create_access_token, decode_access_token
from datetime import timedelta
import pytest
import jwt

def test_password_hashing():
    password = "supersecretpassword123!"
    hashed = get_password_hash(password)
    
    assert hashed != password
    assert verify_password(password, hashed) is True
    assert verify_password("wrongpassword", hashed) is False

def test_jwt_creation_and_decoding():
    data = {"sub": "test@example.com", "role": "ADMIN"}
    token = create_access_token(data=data, expires_delta=timedelta(minutes=15))
    
    decoded = decode_access_token(token)
    assert decoded["sub"] == "test@example.com"
    assert decoded["role"] == "ADMIN"
    assert "exp" in decoded

def test_jwt_expired():
    data = {"sub": "test@example.com"}
    # Create an artificially expired token
    token = create_access_token(data=data, expires_delta=timedelta(seconds=-1))
    
    with pytest.raises(jwt.ExpiredSignatureError):
        decode_access_token(token)
