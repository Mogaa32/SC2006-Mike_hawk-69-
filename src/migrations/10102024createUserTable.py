import sqlite3

def create_user_table(conn):
    """Create the User table if it doesn't exist."""
    create_table_query = """
    CREATE TABLE IF NOT EXISTS User (
        userID TEXT PRIMARY KEY,  -- Store UUID as text
        userName TEXT NOT NULL,
        passwordHash TEXT NOT NULL,
        emailAddress TEXT NOT NULL,
        loginStatus BOOLEAN NOT NULL,
        points INTEGER NOT NULL,
        notificationPreference TEXT CHECK(notificationPreference IN ('email', 'sms', 'push')),
        notificationEnabled BOOLEAN NOT NULL,
        isAuthority BOOLEAN NOT NULL,
        isModerator BOOLEAN NOT NULL
    );
    """
    try:
        cursor = conn.cursor()
        cursor.execute(create_table_query)
        conn.commit()
        print("User table created successfully.")
    except sqlite3.Error as e:
        print(e)


conn = sqlite3.connect('users.db')
create_user_table(conn)