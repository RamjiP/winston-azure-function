var Transport = require('winston-transport'),
    winston = require('winston');

module.exports = class WinstonAzureFunction extends Transport {


    constructor(opts) {
        super(opts);

        this.name = 'azure-functions';
        this.context = options.context;
        this.level = options.level || 'info';

        return this;
    }

    log(info, callback) {
        setImmediate(function () {
            this.emit('logged', info);
        });

        // Perform the writing to the remote service
        if (this.context.log[level]) {
            this.context.log[level]('[' + level + '] ' + message);
        } else {
            this.context.log('[' + level + '] ' + message);
        }
        callback();
    }
}


winston.transports.AzureFunction = WinstonAzureFunction;