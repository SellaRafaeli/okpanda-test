var express  = require('express');
var morgan   = require('morgan')
var agenda   = require('./agenda');
var mongo    = require('mongodb').MongoClient
var node_uuid= require('node-uuid');
var app      = express();
var public   = process.cwd() + '/build';
var postmark = require("postmark");
var postmarkEmailClient = new postmark.Client(process.env.POSTMARK);
 
app.use(morgan('combined'))
app.use(express.static(public));

var sendEmail = function(data) {
  console.log('sending email: ',data)
  let res = postmarkEmailClient.sendEmail({
    "From": "sella@rafaeli.net", 
    "To": "sella.rafaeli@gmail.com", 
    "Subject": data.topic + ' - ' + data.msg,
    "TextBody": data.payload
  });
  console.log('sent email',res);
}

agenda.sendEmail = sendEmail;

app.get('/ping',(req,res)=> { res.send({foo: 'bar'})})

app.get('/api/addJob', (req,res) => {
  let topic   = req.query.topic;
  let msg     = req.query.msg;
  let payload = req.query.payload;
  let uuid    = node_uuid.v1();
  let jobInfo = {topic, msg, payload, uuid}
  agenda.schedule('in 1 second', 'sendMsg', jobInfo);
  res.send({data: jobInfo})
})

app.get('/api/jobs', (req,res) => {
  let crit = {"lastFinishedAt": {'$exists':false}};
  crit['data.topic'] = req.query.topic;
  agenda.jobs(crit, function(err, jobs) {
    res.send({jobs: jobs})
  });
});

app.get('/api/deleteJob', (req,res) => {
  let crit = {};
  crit['data.uuid'] = req.query.uuid; 
  agenda.cancel(crit,function(err, numRemoved) {
    err ? res.send(err) : res.send('removed '+numRemoved)
  });
});

app.get('/api/deleteAll', (req,res) => {
  let crit = {};
  agenda.cancel(crit,function(err, numRemoved) {
    err ? res.send(err) : res.send('removed '+numRemoved)
  });
});


var port = process.env.PORT || 3002;
app.listen(port, function () { console.log('listening on '+port); });