const express = require('express');
const cors = require('cors');
const connectDB = require('./databases/db');
const bookRoutes = require('./routes/bookroutes');

const app = express();

// Connect to database
connectDB();
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/books', bookRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Book Management API',
    version: '1.0.0',
    endpoints: {
      'GET /api/books': 'Get all books',
      'GET /api/books/:id': 'Get book by ID',
      'POST /api/books': 'Create new book',
      'PUT /api/books/:id': 'Update book by ID',
      'DELETE /api/books/:id': 'Delete book by ID'
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});

module.exports = app;
