var dream = require('dreamjs');

module.exports = function () {
    dream.customType('pi',function () {
        return Math.PI;
    });

    // dream.customType('hello', /hello+ (world|to you)/);
    //
    // dream.customType('5WordSentences',function (helper) {
    //     return helper.chance.sentence({words: 5});
    // });
    //
    // dream.customType('customTypeWithInput',function (helper) {
    //     return helper.input.value;
    // });
    //
    // dream.customType('iceCreamENUM',function (helper) {
    //     var days = ['Monday','Wednesday','Friday'];
    //     return helper.oneOf(days);
    // });
    //
    // dream.customType('incrementalId',function (helper) {
    //     return helper.previousItem ? helper.previousItem.id+1 : 1;
    // });

    dream.customType('transactionId', /[1-5]/);
    dream.customType('transTypeName',function (helper) {
        var types = ['واریز','پایا','برداشت نقدی','ساتنا','موبایلت'];
        return helper.oneOf(types);
    });
    dream.customType('hexColor',function (helper) {
        return helper.chance.color({format: 'hex', casing: 'upper'}).substr(1);
    });
    dream.customType('timeMiliseconds',function (helper) {
        return helper.chance.timestamp()*1000;
    });
    dream.customType('transAmount',function (helper) {
        return helper.chance.natural({min: 10000, max: 100000000})
    });
    dream.customType('rialCurrency', /﷼/);
    dream.customType('cardPan', /6\d{15}/);
    dream.customType('trackingCode', /\d{13}/);
    dream.customType('persianTime', /(0[1-9]|1[0-9]|2[0-9]|30) (فروردین|اردیبهشت|خرداد|مهر|آبان|آذر|دی|بهمن|اسفند) (139[0-5])/);
}