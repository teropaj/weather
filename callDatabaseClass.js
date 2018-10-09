'use strict';

var Database= require('./databaseClass.js') ;
const path=require('path');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const urlencodedParser=bodyParser.urlencoded({extended:false});

const server=require('http').Server(app);

const port=process.env.PORT || 3000;
const host=process.env.HOST || 'localhost';
var data =[];

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=>res.sendFile(path.join(__dirname,'index.html')));
app.get('/jee.html', (req,res)=>res.sendFile(path.join(__dirname,'jee.html')));
app.post('/weather',urlencodedParser,(req,res)=>{
  if(!req.body) {
    return res.sendStatus(400);
  }
  else {
    res.writeHead(200, {'content-type':'text/html'});
    res.write(`<!DOCTYPE html>
      <html>
        <head>
           <meta charset="utf-8">
           <title>Data sent</title>
        </head>
        <body>
          <h1>Your name</h1>
          <p>${data}</p>`);

    //res.write(`<p>${req.body.firstname} ${req.body.lastname}</p>`);
    res.end(`</body>
         </html>`);
  }
});
server.listen(port, host ,()=>
  /*eslint-disable no-console*/
  console.log(`Server ${host} on port ${port}`)
);


var database= new Database();
database.connect();
database.pullSensorData().then(results => {
  data=results;
  //console.log(results);
  console.log(data);
});

database.endDatabase();
//console.log(results);