const express = require ('express');
const bodyParser = require ('body-parser');
const path = require('path');

const app = express();
const port = 8081; 

app.use('/', express.static(path.join(__dirname, '../client')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

app.get('/:houseId', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});