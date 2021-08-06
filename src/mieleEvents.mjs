import {config} from "dotenv";

config();

import EventSource from 'eventsource';
import {saveRecord} from './firebase-db';

export const SECRET_TOKEN = process.env.SECRET_TOKEN;

let eventSourceInitDict = {headers: {'Authorization': `Bearer ${SECRET_TOKEN}`}};
const source = new EventSource('https://api.mcs3.miele.com/v1/devices/all/events', eventSourceInitDict);


source.addEventListener('actions', (e) => {
    saveRecord('actions', JSON.parse(e.data));
});

source.addEventListener('devices', (e) => {
    let deviceObj = JSON.parse(e.data);
    deviceObj.eventTime = new Date();
    console.log(deviceObj);
    saveRecord('devices', deviceObj);
});

source.onerror = function (err) {
    console.error(err);
};
