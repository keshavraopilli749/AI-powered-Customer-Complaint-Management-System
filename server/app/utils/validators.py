import re

def validate_phone_number(phone: str) -> bool:
    """
    Basic validation for phone numbers.
    Allows digits, spaces, plus sign, hyphens, and parentheses.
    """
    if not phone:
        return True
    pattern = re.compile(r'^[+\d\s\-\(\)]+$')
    return bool(pattern.match(phone))

def validate_batch_number(batch: str) -> bool:
    """
    Validates batch number format (alphanumeric and hyphens).
    """
    if not batch:
        return True
    pattern = re.compile(r'^[A-Za-z0-9\-]+$')
    return bool(pattern.match(batch))
