# Demo Restaurant API (Python/FastAPI)

A lightweight backend for a demo restaurant application built with Python, FastAPI, and SQLite. This project demonstrates how to set up a basic RESTful API to view a menu and place orders.

## Project Structure

- `main.py`: The entry point for the FastAPI application.
- `database.py`: Handles SQLite database connection and initialization (creates tables and populates dummy menu data).
- `models.py`: Pydantic models for data validation (`OrderRequest`, `MenuItem`).
- `routers/`: Contains the API endpoints.
  - `menu.py`: Handles menu-related operations (`GET /api/menu`).
  - `orders.py`: Handles order-related operations (`POST /api/place_order`).
- `requirements.txt`: Python dependencies.

## Prerequisites

Before setting up the project, make sure you have:
- [Python 3.x](https://www.python.org/downloads/) installed.
- [Visual Studio Code](https://code.visualstudio.com/) (recommended).
- SQLite extensions for VSCode (optional, but helpful for viewing the `restaurant.db` database).

## Setup Instructions

### 1. (Optional) Create a Virtual Environment

It is recommended to use a virtual environment to keep dependencies isolated. Open your terminal in the project directory and run:

```powershell
# Create a virtual environment named 'venv'
python -m venv venv

# Activate the virtual environment (Windows/PowerShell)
.\venv\Scripts\Activate.ps1
```

*(Note: On Mac/Linux, the activation command is `source venv/bin/activate`)*

### 2. Install Requirements

Install the necessary Python packages (`fastapi`, `uvicorn`, `pydantic`):

```powershell
pip install -r requirements.txt
```

### 3. Run the Server

Start the FastAPI application using Uvicorn. The `--reload` flag enables auto-reloading when you make changes to the code.

```powershell
uvicorn main:app --reload
```

The server should now be running at:
- `http://127.0.0.1:8000` or `http://localhost:8000`

### 4. Interactive API Documentation

FastAPI automatically generates interactive API documentation. Once the server is running, you can access it by navigating to:
- **Swagger UI**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) (Best for testing endpoints directly in the browser)
- **ReDoc**: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

---

## API Endpoints

### 1. Get Menu

- **Endpoint**: `GET /api/menu`
- **Description**: Returns a list of all available menu items and their prices.

### 2. Place Order

- **Endpoint**: `POST /api/place_order`
- **Description**: Places a new order and calculates the total price based on the selected item and quantity.
- **Request Body** (JSON):
  ```json
  {
    "item_id": 1,
    "quantity": 2
  }
  ```
- **Response**: Returns a success message along with the unit price and total charged.

---

## Making Changes

If you want to add more features or modify existing ones:

1. **Add new tables or initial data**: Edit the `initialize_database()` function in `database.py`.
2. **Add new data models**: Define new Pydantic models in `models.py`.
3. **Add new endpoints**: 
   - Create a new file in the `routers/` directory (e.g., `customers.py`).
   - Define your routes using `@router.get()`, `@router.post()`, etc.
   - Register the new router in `main.py` using `app.include_router()`.
4. **Test your changes**: Save the files (the server will auto-reload) and test the new endpoints via the interactive `/docs` page.
