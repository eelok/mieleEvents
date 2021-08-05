const constants = require('../constants');
const {SECRET_TOKEN} = constants;
const EventSource = require('eventsource');
const database = require("./database");

let eventSourceInitDict = {headers: {'Authorization': `Bearer ${SECRET_TOKEN}`}};
const source = new EventSource('https://api.mcs3.miele.com/v1/devices/all/events', eventSourceInitDict);

database.connect();

source.addEventListener('actions', (e) => {
    database.saveRecord('actions', JSON.parse(e.data));
});

source.addEventListener('devices', (e) => {
    let deviseObj = JSON.parse(e.data);
    deviseObj.eventTime = new Date();
    console.log(deviseObj);
    database.saveRecord('devices', deviseObj);
});

source.onerror = function (err) {
    console.error(err);
};
