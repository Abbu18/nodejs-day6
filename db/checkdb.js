const { MongoClient} = require('mongodb');

//function showDatabases (client){
//   const dbList = client.db().admin().listDataBases()
//    console.log("dbs: ", dbList)
//    dbList.databases.forEach(db => console.log(` - ${db.name}`))}

module.exports = async function connectToMongoDb (){
    const URL = 'mongodb://127.0.0.1:27017/';
    const client = new MongoClient(URL);
    await client.connect();  //connection establishment
//  await showDatabases(client);
    await client.close();
}
