# Demo Restaurant (Full Stack)

A full-stack demo restaurant application featuring a Python/FastAPI backend with SQLite, and a modern Next.js frontend with React and Tailwind CSS. This project demonstrates how to set up a basic RESTful API to view a menu, place orders, and connect it to a web interface.

## Project Structure

- `frontend/`: The Next.js frontend application.
  - `app/`: Next.js App Router pages and components.
  - `package.json`: Node.js dependencies and scripts.
- `main.py`: The entry point for the FastAPI backend application.
- `database.py`: Handles SQLite database connection and initialization (creates tables and populates dummy menu data).
- `models.py`: Pydantic models for backend data validation (`OrderRequest`, `MenuItem`).
- `routers/`: Contains the backend API endpoints.
  - `menu.py`: Handles menu-related operations (`GET /api/menu`).
  - `orders.py`: Handles order-related operations (`POST /api/place_order`).
- `requirements.txt`: Python dependencies.

## Prerequisites

Before setting up the project, make sure you have:
- **Backend:**
  - [Python 3.x](https://www.python.org/downloads/) installed.
- **Frontend:**
  - [Node.js](https://nodejs.org/) (LTS recommended) and `npm` installed.
- **General:**
  - [Visual Studio Code](https://code.visualstudio.com/) (recommended).
  - SQLite extensions for VSCode (optional, but helpful for viewing the `restaurant.db` database).

## Setup Instructions

### 1. Backend Setup (FastAPI)

Open your terminal in the root project directory:

```powershell
# (Optional) Create a virtual environment named 'venv'
python -m venv venv

# Activate the virtual environment (Windows/PowerShell)
.\venv\Scripts\Activate.ps1
# (Note: On Mac/Linux, the activation command is `source venv/bin/activate`)

# Install Requirements
pip install -r requirements.txt

# Run the Server
uvicorn main:app --reload
```

The backend server should now be running at:
- `http://127.0.0.1:8000` or `http://localhost:8000`

FastAPI automatically generates interactive API documentation. You can access it at:
- **Swagger UI**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) (Best for testing endpoints directly in the browser)

### 2. Frontend Setup (Next.js)

Open a **new** terminal (keep the backend running) and navigate to the `frontend` directory:

```powershell
cd frontend

# Install Node modules
npm install

# Run the development server
npm run dev
```

The frontend web app should now be accessible at:
- `http://localhost:3000`

---

## API Endpoints (Backend)

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

**Backend:**
1. **Add new tables or initial data**: Edit the `initialize_database()` function in `database.py`.
2. **Add new endpoints**: 
   - Create a new file in the `routers/` directory (e.g., `customers.py`).
   - Define your routes using `@router.get()`, `@router.post()`, etc.
   - Register the new router in `main.py` using `app.include_router()`.
3. **Test your changes**: Save the files (the server will auto-reload) and test the new endpoints via the interactive `/docs` page.

**Frontend:**
1. **Modify UI**: Edit the pages in `frontend/app/`. The page auto-updates as you edit the files.
2. **Styles**: Use standard Tailwind CSS utility classes within your components.
