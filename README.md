# Quiz Application

## Overview

This is a quiz application built with a TypeScript-based frontend and a Flask backend. The application provides 10 quiz questions per session and maintains a final leaderboard stored in an SQLite database.

## Features

- Generates a 10-question quiz
- Stores leaderboard data in an SQLite database
- Flask-based backend for managing quiz data
- TypeScript-based frontend for user interaction
- Supports hosting over a network

## Prerequisites

Ensure you have the following installed on your system:

- Python (>=3.x)
- Flask
- Node.js (>=16.x)
- npm or yarn

## Installation

### Backend Setup

1. Run the backend server:
   ```
   python server.py
   ```

### Frontend Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```

## Hosting Over a Network

To allow access from other devices on the same network:

1. Change `localhost` to your machine's IP address in the frontend code.
2. Start the frontend with the following command:
   ```
   npm run dev -- --host
   ```

## Database

The application uses SQLite for storing quiz results and leaderboard data. The database file is automatically created when the backend server runs.

## Contributing

Feel free to fork this repository and submit pull requests to improve the project.

## License

This project is licensed under the MIT License.

---

Enjoy the quiz and have fun learning!
