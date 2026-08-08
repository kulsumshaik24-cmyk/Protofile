const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Make sure mongoose is required if connecting here
const app = express();

app.use(cors());
app.use(express.json());

// Import your project routes
const projectRoutes = require('./routes/projectRoutes');

// Use the project routes for /api/projects
app.use('/api/projects', projectRoutes);

// Root route to check if backend is running
app.get('/', (req, res) => {
  res.json({ message: "Backend is running successfully and connected to project routes!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
