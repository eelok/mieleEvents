const mongoClient = require('mongodb').MongoClient;
const mongoDbURL = 'mongodb://localhost:27017/';
let mongodbObject;

function connect(somefunction) {
    mongoClient.connect(mongoDbURL, (err, database) => {
        mongodbObject = database.db('miele-events');
        somefunction && somefunction();
    });
}

function saveRecord(collectionName, event) {
    event.eventTime = new Date();
    mongodbObject.collection(collectionName).insertOne(event);
}


function getAllRecord(collectionName){
    return mongodbObject.collection(collectionName)
        .find()
        .toArray();
}

function close() {
    mongodbObject.close();
}

module.exports.connect = connect;
module.exports.saveRecord = saveRecord;
module.exports.close = close;
module.exports.getAllRecord = getAllRecord;