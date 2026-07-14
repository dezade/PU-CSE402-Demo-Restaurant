import sqlite3

def get_db_connection():
    # Connect to the database file
    conn = sqlite3.connect('restaurant.db', check_same_thread=False)
    # This allows us to access columns by name (e.g., row['price'])
    conn.row_factory = sqlite3.Row 
    return conn

def initialize_database():
    conn = get_db_connection()
    cursor = conn.cursor()

    # 1. Create Menu Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS menu (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE,
            price REAL
        )
    ''')

    # 2. Create Orders Table 
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            item_id INTEGER,
            quantity INTEGER,
            total_price REAL
        )
    ''')

    # 3. Pre-populate the menu if it's empty
    cursor.execute("SELECT COUNT(*) FROM menu")
    if cursor.fetchone()[0] == 0:
        cursor.executemany(
            "INSERT INTO menu (name, price) VALUES (?, ?)",
            [("Burger", 350.00), ("Pizza", 850.00), ("Pasta", 450.00), ("Salad", 100.00)]
        )

    conn.commit()
    conn.close()