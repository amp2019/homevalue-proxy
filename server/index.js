require('newrelic');
const request = require('request');
const proxy = require('http-proxy-middleware');
const express = require ('express');
// const bodyParser = require ('body-parser');
const path = require('path');

const app = express();
const port = 3004; 

app.use('/', express.static(path.join(__dirname, '../client')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use(bodyParser.json());

app.get('/:propertyId', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.get('/api/properties/:propertyId', (request, response) => {
  console.log('HIT GET REDIRECT', request.params.propertyId);
  response.redirect('http://ec2-35-172-136-164.compute-1.amazonaws.com/api/properties/' + request.params.propertyId);
});


app.delete('/delete/:propertyId', (request, response) => {
  let id = request.params.propertyId;
  console.log('HIT DELETE REDIRECT', id );
  response.redirect(303, 'http://ec2-35-172-136-164.compute-1.amazonaws.com/delete/request.params.propertyId');
});

// Use middle ware to route POST And PUT requests to service. 
// Works with Artillery

const myProxy = proxy(['/post', '/update', '/api/properties'], {
  target: 'http://ec2-35-172-136-164.compute-1.amazonaws.com',
  changeOrigin: true,
  xfwd: true
});

app.use(myProxy);


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
