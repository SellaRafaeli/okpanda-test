var Agenda  = require('agenda');
var mongoConnectionString = "mongodb://127.0.0.1/okpanda";
var agenda = new Agenda({db: {address: mongoConnectionString}});

agenda.define('sendMsg', function(job, done) {
  console.log('adding job')
  console.log('topic: ',job.attrs.data.topic)
  console.log('msg: ',job.attrs.data.msg)
  console.log('payload: ',job.attrs.data.payload)
  agenda.sendEmail(job.attrs.data)
  job.remove();
  done();
});

agenda.on('ready', function() {
  agenda.start();
  console.log('started agenda')
});

module.exports = agenda;