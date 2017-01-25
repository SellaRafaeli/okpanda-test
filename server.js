var express = require('express');
var morgan  = require('morgan')

var app        = express();
var agenda  = require('./agenda');
var public  = process.cwd() + '/build';

app.use(morgan('combined'))
app.use(express.static(public));
app.get('/ping',(req,res)=> { res.send({foo: 'bar'})})

app.get('/api/jobs',(req,res)=> { 
  jobs = [req.query.topic+'-job']
  res.send({jobs: jobs});
})

app.get('/api/addJob', (req,res) => {
  let topic   = req.query.topic;
  let msg     = req.query.msg;
  let payload = req.query.payload;
  let info    = {topic, msg, payload}
  agenda.schedule('in 1 second', 'sendMsg', info);
  res.send({info})
})

var port = process.env.PORT || 3002;
app.listen(port, function () { console.log('listening on '+port); });
