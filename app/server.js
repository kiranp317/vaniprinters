const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Health check
app.get('/health', (req, res) => {
  res.send('OK');
});

// API example
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from OpenShift 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});