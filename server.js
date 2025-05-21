const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Serve the index.html file on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to log IP on consent
app.post('/log-ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  console.log(`Logged IP: ${ip}`);
  res.json({ message: 'IP logged successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
