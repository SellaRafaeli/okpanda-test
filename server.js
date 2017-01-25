var express = require('express');
var morgan  = require('morgan')

var app        = express();
var agenda  = require('./agenda');
var public  = process.cwd() + '/build';

app.use(morgan('combined'))
app.use(express.static(public));
app.get('/ping',(req,res)=> { res.send({foo: 'bar'})})

app.get('/api/addJob', (req,res) => {
  let topic   = req.query.topic;
  let msg     = req.query.msg;
  let payload = req.query.payload;
  let info    = {topic, msg, payload}
  agenda.schedule('in 10 seconds', 'sendMsg', info);
  res.send({info})
})

app.get('/api/jobs', (req,res) => {
  let crit = {};
  crit['data.topic'] = req.query.topic;
  agenda.jobs(crit, function(err, jobs) {
    res.send({jobs: jobs})
  });
});

app.get('/remove_all', (req,res) => {
  agenda.cancel({},function(err, numRemoved) {
    res.send('removed '+numRemoved)
  });
});

var port = process.env.PORT || 3002;
app.listen(port, function () { console.log('listening on '+port); });