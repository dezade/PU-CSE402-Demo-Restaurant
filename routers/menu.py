from fastapi import APIRouter, HTTPException
from models import MenuItem
from database import get_db_connection

router = APIRouter()

@router.get("/menu", response_model=list[MenuItem])
def get_menu():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, price FROM menu")
    menu_items = cursor.fetchall()
    conn.close()
    return [MenuItem(**item) for item in menu_items]