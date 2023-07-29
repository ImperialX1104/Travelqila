const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Define your API routes here (if any)
// Example:
// app.get('/api/data', (req, res) => {
//   // Handle API request and send response
//   res.json({ message: 'API response' });
// });

// Configure routes for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
