from fastapi import FastAPI
from database import initialize_database
from routers import orders, menu
from fastapi.middleware.cors import CORSMiddleware

# 1. Initialize our tables and dummy data
initialize_database()

# 2. Start the FastAPI application
app = FastAPI(title="Demo Restaurant with Python")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],     # Allow any frontend to connect (useful for local dev)
    allow_credentials=True,
    allow_methods=["*"],     # THIS allows the OPTIONS method to pass!
    allow_headers=["*"],     # Allow all headers
)

# 3. Plug in the routes we created
app.include_router(orders.router, prefix="/api", tags=["Orders"])
app.include_router(menu.router, prefix="/api", tags=["Menu"])


@app.get("/")
def home():
    return {"message": "Server is running! Go to /docs to test the API."}