const { MongoClient} = require('mongodb');
const MongoURL = 'mongodb://127.0.0.1:27017/';

//connectToMongoDb();

//connection to database
//previously mongodb has two connection string mongodb+srv: // mongobd://
//autoreconnect
//reconnectTries
//reconnectInterval

const client = new MongoClient(MongoURL, {
  usenewURLparser: true,
  useUnifiedTopology: true
})

module.exports = client;