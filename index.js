var Transport = require('winston-transport'),
    winston = require('winston');

winston.transports.AzureFunction = module.exports = class WinstonAzureFunction extends Transport {


    constructor(opts) {
        super(opts);

        this.name = 'azure-functions';
        this.context = opts.context;
        this.level = opts.level || 'info';

        return this;
    }

    log(info, callback) {
        var msgType = typeof info.message;
        var msgIsObject = msgType === 'object';

        // Perform the writing to the remote service
        if (this.context.log[level]) {
            if (msgIsObject) {
                this.context.log[info.level](info.message);    
            } else {
                this.context.log[info.level]('[' + info.level + '] ' + info.message);
            }
        } else {
            if (msgIsObject) {
                this.context.log(info.message);    
            } else {
                this.context.log('[' + info.level + '] ' + info.message);
            }
        }
        callback();
    }
}
