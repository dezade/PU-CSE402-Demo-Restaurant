from fastapi import APIRouter, HTTPException
from models import OrderRequest
from database import get_db_connection

router = APIRouter()

@router.post("/place_order")
def create_new_order(order: OrderRequest):
    conn = get_db_connection()
    cursor = conn.cursor()

    # --- 1. BUSINESS LOGIC ---
    cursor.execute("SELECT name, price FROM menu WHERE id = ?", (order.item_id,))
    menu_item = cursor.fetchone()

    if menu_item is None:
        raise HTTPException(status_code=404, detail="Item ID not found on the menu!")

    # --- 2. BACKEND CALCULATION ---
    unit_price = menu_item['price']
    fetched_name = menu_item['name'] # This now works because we SELECTed it!
    calculated_total = unit_price * order.quantity

    # Your print statement will now work perfectly:
    print(f"Order placed: {order.quantity} x {fetched_name} at {unit_price} each. Total: {calculated_total}")

    # --- 3. SAVE TO DATABASE ---
    # We still save the name to the orders table so the receipt makes sense
    cursor.execute(
        "INSERT INTO orders (item_id, quantity, total_price) VALUES (?, ?, ?)",
        (order.item_id, order.quantity, calculated_total)
    )
    conn.commit()
    conn.close()

    # --- 4. RESPOND TO FRONTEND ---
    return {
        "status": "Success",
        "message": f"Ordered {order.quantity} {fetched_name}(s)",
        "unit_price": unit_price,
        "total_charged": calculated_total
    }