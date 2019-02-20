const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 2998; 
const serve = express.static('./public/dist');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(serve); 

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});