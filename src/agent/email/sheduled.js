import Email_Agent from '../index.js';

var schedule = require('node-schedule');


class Email_Sheduled_Agent extends Email_Agent
{
    constructor(in_Options)
    {
        this.shedule = in_Options.shedule;
    }

    start(in_Params, in_Callback)
    {
        this._job = schedule.scheduleJob(this.shedule, this.do);
    }

    stop(in_Params, in_Callback)
    {
        this._job.cancel();
        this._job = undefined;
    }

    do()
    {
        console.log("Do nothing");

    }
};

module.exports = Email_Sheduled_Agent;