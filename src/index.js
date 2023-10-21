const express = require('express');
const router = require('./routes');

const app = express();
const PORT = 3000;

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Server started')
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; 
