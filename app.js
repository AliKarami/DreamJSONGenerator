var dream = require('dreamjs');
var jsonfile = require('jsonfile');
require('./customTypes')();

var outFile = __dirname + '/output.json';

function writeJSON(object) {
    jsonfile.writeFileSync(outFile, object, {
        spaces: 2
    })
};

dream.schema('Transaction',{
    transactionType: {
        id: 'transactionId',
        name: 'transTypeName',
        color: 'hexColor'
    },
    amount: 'transAmount',
    time: 'timeMiliseconds',
    currency: 'rialCurrency',
    source: 'cardPan',
    destination: 'cardPan',
    trackingCode: 'trackingCode',
    timePersianFormat: 'persianTime'
});

writeJSON(dream.useSchema('Transaction').generateRnd(100).output());