const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// 1. Connect to MongoDB database using your .env URI
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// 2. Import and mount your project routes (matching projectRoutes.js)
const projectRoutes = require('./routes/projectRoutes'); 
const contactRoutes = require('./routes/contact');

app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// Root route to check if server is running
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
