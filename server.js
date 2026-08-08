const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());




// Root route now directly serves the project details JSON
app.get('/', (req, res) => {
  res.json(projectsData);
});

// Keep /api/projects working as well
app.get('/api/projects', (req, res) => {
  res.json(projectsData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
