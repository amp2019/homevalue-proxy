require('newrelic');
const express = require ('express');
const bodyParser = require ('body-parser');
const path = require('path');

const app = express();
const port = 3000; 

app.use('/', express.static(path.join(__dirname, '../client')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

app.get('/:propertyId', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.get('/api/properties/:propertyId', (request, response) => {
  console.log('HIT GET REDIRECT', request.params.propertyId);
  response.redirect('http://localhost:8081/api/properties/' + request.params.propertyId);
});

app.post('/post', (request, response) => {
  console.log('HIT POST REDIRECT, body IS ', request.body);
  response.redirect(307, 'http://localhost:8081/post');
});

app.delete('/delete/:propertyId', (request, response) => {
  let id = request.params.propertyId;
  console.log('HIT DELETE REDIRECT', id );
  response.redirect(303, 'http://localhost:8081/delete/request.params.propertyId');
});

app.put('/update', (request, response) => {
  console.log('HIT UPDATE REDIRECT, body IS ', request.body);
  response.redirect(307, 'http://localhost:8081/update');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});