var express = require('express');
var app     = express();
var public  = process.cwd() + '/build';
var morgan = require('morgan')

app.use(morgan('combined'))
app.use(express.static(public));
app.get('/ping',(req,res)=> { res.send({foo: 'bar'})})

app.get('/api/jobs',(req,res)=> { res.send({jobs: ['bar'+new Date()]})})

var port = process.env.PORT || 3002;
app.listen(port, function () { console.log('listening on '+port); })
