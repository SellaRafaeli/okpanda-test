var Agenda  = require('agenda');
console.log('in agenda')
var mongoConnectionString = "mongodb://127.0.0.1/okpanda";

var agenda = new Agenda({db: {address: mongoConnectionString}});

// or override the default collection name:
// var agenda = new Agenda({db: {address: mongoConnectionString, collection: "jobCollectionName"}});

// or pass additional connection options:
// var agenda = new Agenda({db: {address: mongoConnectionString, collection: "jobCollectionName", options: {server:{auto_reconnect:true}}}});

// or pass in an existing mongodb-native MongoClient instance
// var agenda = new Agenda({mongo: myMongoClient});

// EmailService = {
//         send:function(callback){
//             console.log("sending email");
//             callback();
//         }
// };

agenda.define('sendMsg', function(job, done) {
  console.log('adding job')
  console.log('topic: ',job.attrs.data.topic)
  console.log('msg: ',job.attrs.data.msg)
  console.log('payload: ',job.attrs.data.payload)
});

agenda.define('greet the world', function(job, cb) {
  console.log(job.attrs.data.time, 'hello world!');
  if (cb) cb();
});

agenda.on('ready', function() {
  // agenda.every('3 minutes', 'delete old users');

  // // Alternatively, you could also do:
  // agenda.every('*/3 * * * *', 'delete old users');
  agenda.schedule('in 1 hour', 'greet the world', {time: new Date()});
  agenda.start();
  console.log('started agenda')
});

module.exports = agenda;