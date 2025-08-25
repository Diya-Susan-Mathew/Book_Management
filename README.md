# Book Management API

A simple Node.js RESTful API for managing books, built with Express and MongoDB.

## Features

- Add, update, delete, and list books
- RESTful endpoints
- JSON responses
- Error handling
- CORS enabled

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Diya-Susan-Mathew/Book_Management.git
   cd Book_Management
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your MongoDB connection string (example below):

   ```
   MONGODB_URI=mongodb://localhost:27017/book_management
   PORT=3000
   ```

4. **Start the server:**

   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000` by default.

## API Endpoints

### Base URL

```
http://localhost:3000
```

### Endpoints

- `GET /api/books` — Get all books
- `GET /api/books/:id` — Get a book by ID
- `POST /api/books` — Create a new book
- `PUT /api/books/:id` — Update a book by ID
- `DELETE /api/books/:id` — Delete a book by ID

## Example Requests

### Create a New Book

```bash
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "published": 1925}'
```

### Get All Books

```bash
curl http://localhost:3000/api/books
```

### Get Book By ID

```bash
curl http://localhost:3000/api/books/<BOOK_ID>
```

### Update a Book

```bash
curl -X PUT http://localhost:3000/api/books/<BOOK_ID> \
  -H "Content-Type: application/json" \
  -d '{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "published": 1926}'
```

### Delete a Book

```bash
curl -X DELETE http://localhost:3000/api/books/<BOOK_ID>
```

## Error Handling

- Invalid routes return a 404 JSON error:
  ```json
  {
    "success": false,
    "message": "Route not found"
  }
  ```
- Server errors return a 500 JSON error:
  ```json
  {
    "success": false,
    "message": "Something went wrong!"
  }
  ```
