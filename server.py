from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)
CORS(app)

def init_db():
    conn = sqlite3.connect('users.sqlite')
    cursor = conn.cursor()
    
    # Create users table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        marks INTEGER DEFAULT NULL
    )
    """)
    
    # List of 30 users with plaintext passwords
    users = [
        ("John", "john@2006"),
        ("George", "george#123"),
        ("Michael", "michael@2021"),
        ("David", "david@9876"),
        ("Robert", "robert#456"),
        ("William", "william@789"),
        ("Richard", "richard#321"),
        ("Joseph", "joseph@654"),
        ("Thomas", "thomas#2020"),
        ("Charles", "charles@111"),
        ("Steven", "steven@2020"),
        ("Christopher", "chris#2021"),
        ("Daniel", "daniel@4567"),
        ("Matthew", "matthew#1234"),
        ("Anthony", "anthony@7890"),
        ("Mark", "mark#456"),
        ("Paul", "paul@1111"),
        ("Andrew", "andrew#2222"),
        ("Joshua", "joshua@3333"),
        ("Kevin", "kevin#4444"),
        ("Brian", "brian@5555"),
        ("Edward", "edward#6666"),
        ("Scott", "scott@7777"),
        ("Eric", "eric#8888"),
        ("Jason", "jason@9999"),
        ("Ryan", "ryan#0000"),
        ("Adam", "adam@1122"),
        ("Justin", "justin#3344"),
        ("Benjamin", "benjamin@5566"),
        ("Aaron", "aaron#7788"),
        ("Alexander", "alex@1234"),
        ("Jonathan", "jonathan#5678"),
        ("Patrick", "patrick@9012"),
        ("Samuel", "samuel@3456"),
        ("Zachary", "zachary@7890"),
        ("Jeremy", "jeremy#2345"),
        ("Gabriel", "gabriel@6789"),
        ("Nicholas", "nicholas#1122"),
        ("Oliver", "oliver@3344"),
        ("Henry", "henry#5566"),
        ("Victor", "victor@7788"),
        ("Sebastian", "sebastian#9900"),
        ("Leonardo", "leonardo@2233"),
        ("Lucas", "lucas#4455"),
        ("Julian", "julian@6677"),
        ("Marcus", "marcus#8899"),
        ("Vincent", "vincent@1122"),
        ("Connor", "connor#3344"),
        ("Dylan", "dylan@5566"),
        ("Sophia", "sophia#7788"),
    ]

    # Insert users into the table
    cursor.executemany("INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)", users)
    
    conn.commit()
    conn.close()

def get_db_connection():
    conn = sqlite3.connect('users.sqlite')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'error': 'Missing username or password'}), 400
    
    conn = get_db_connection()
    user = conn.execute(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        (username, password)
    ).fetchone()
    conn.close()
    
    if user:
        return jsonify({'message': 'Login successful', 'username': username}), 200
    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/submit_results', methods=['POST'])
def submit_results():
    data = request.json
    username = data.get('username')
    marks = data.get('marks')
    
    if not username or marks is None:
        return jsonify({'error': 'Missing username or marks'}), 400
    
    conn = get_db_connection()
    try:
        conn.execute(
            'UPDATE users SET marks = ? WHERE username = ?',
            (marks, username)
        )
        conn.commit()
        return jsonify({'message': 'Score updated successfully'}), 200
    except sqlite3.Error as e:
        return jsonify({'error': str(e)}), 500
    finally:
        conn.close()

@app.route('/leaderboard', methods=['GET'])
def get_leaderboard():
    conn = get_db_connection()
    scores = conn.execute(
        'SELECT username, marks FROM users WHERE marks IS NOT NULL ORDER BY marks DESC'
    ).fetchall()
    conn.close()
    return jsonify([dict(row) for row in scores])

if __name__ == '__main__':
    # Initialize the database if it doesn't exist
    if not os.path.exists('users.sqlite'):
        init_db()
    app.run(host='0.0.0.0', debug=True, port=5000)
