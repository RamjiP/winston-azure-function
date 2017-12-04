# winston-azure-function

Winston transport for [azure function][2] using [winston][1]

## Installation

``` bash
  $ npm install winston
  $ npm install winston-azure-function
```

## Usage
Here is the use of azure function context.
``` js
  var winston = require('winston');
  require('winston-azure-table-storage');
  
  winston.configure({
      transports: [
          new (winston.transports.AzureFunction)({ context: azContext })
      ]
  });
  
  winston.warn('Hello toto!');
```

[1]: https://github.com/winstonjs/winston
[2]: https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node#context-object