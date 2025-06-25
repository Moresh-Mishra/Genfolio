const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(cors());

let userData = {};

app.post('/user', (req, res) => {
  userData = req.body;
  res.json({ success: true });
});

app.get('/user', (req, res) => {
  res.json(userData);
});

app.get('/', (req, res) => res.send('API is working'));
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));