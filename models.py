from pydantic import BaseModel

# When the frontend sends an order, it MUST look exactly like this
class OrderRequest(BaseModel):
    item_id: int
    quantity: int

class MenuItem(BaseModel):
    id: int
    name: str
    price: float