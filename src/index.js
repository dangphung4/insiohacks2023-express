const express = require('express');
const router = require('./routes');
const cors = require('cors');  


const app = express();
const PORT = 3000;

app.use(cors());  
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Server started')
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; 
