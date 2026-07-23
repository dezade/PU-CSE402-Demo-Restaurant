const API_BASE_URL = "http://localhost:8000"; // Backend URL

// --- 1. DEFINE OUR TYPES ---
export interface MenuItem {
    id: number;
    name: string;
    price: number;
}

export interface OrderResponse {
    status: string;
    message: string;
    unit_price: number;
    total_charged: number;
    detail?: string; // Optional field for errors
}

// --- 2. FETCH MENU (Server-side) ---
export const fetchMenu = async (): Promise<MenuItem[]> => {
    const response = await fetch(`${API_BASE_URL}/api/menu`, { cache: 'no-store' });
    if (!response.ok) throw new Error("Failed to load menu.");
    return await response.json();
};

// --- 3. SUBMIT ORDER (Client-side) ---
export const submitOrder = async (itemId: string, quantity: string): Promise<OrderResponse> => {
    const response = await fetch(`${API_BASE_URL}/api/place_order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            item_id: parseInt(itemId),
            quantity: parseInt(quantity)
        })
    });
    
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Ordering failed.");
    return data;
};