const express = require('express');
const app = express();
const PORT = 3001;  // You can choose another port if 3001 is already in use

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
