const database = require("./database");


database.connect( async () => {
    const allDevices = await database.getAllRecord('devices');

    const eventTimes = allDevices.map(object => {
        const eventTime = object.eventTime;
        return eventTime;
    });

    const dishwashers = allDevices.map(obj => {
       const device = obj['000105527884'];
        const eventTime = obj.eventTime;
        return { eventTime: eventTime, device: device};
    })

    const washingMachinesWithDriers = allDevices.map(obj =>{
        const device = obj['000151365739'];
        return {eventTime: eventTimes, device: device};
    })

    const allOvens = allDevices.map(obj => {
        const device = obj['000160732559'];
        return {eventTime: eventTimes, device: device};
    })

    const keys =Object.keys(allDevices);

    const dishwashersInUse = dishwashers.filter(dwasher => dwasher.device.state.status.value_localized.toLowerCase() === "in use");

    const ovensInUse = allOvens.filter(oven => oven.device.state.status.value_localized.toLowerCase() === "in use");

    return progName = ovensInUse.map(oven => {
       oven.device.state.ProgramID.value_localized;
    })

//нашла девайз который стартавал
    const result = dishwashers.find(dwasher => dwasher.device.state.status.value_localized.toLowerCase() === "in use");

});


