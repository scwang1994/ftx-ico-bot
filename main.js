///FTX //////////////////////////////////////////////////
const setting = require('./setting.json')
const schedule = require('node-schedule');
const ccxt = require('ccxt');
let ftx = new ccxt.ftx({
    apiKey: setting.apiKey,
    secret: setting.secret,
    headers: {
        'FTX-SUBACCOUNT': setting.subAccount
    },
})

///Start ////////////////////////////////////////////////
async function runICOBot() {
    try {
        await ftx.create_limit_buy_order(setting.symbol, setting.amount, price);
    } catch (error) {
        console.log(error)
    }
}

let rule = new schedule.RecurrenceRule();
rule.hour = 21;
rule.minute = 59;
rule.second = 45;
// run
schedule.scheduleJob(rule, () => {
    setInterval(() => {
        runICOBot();
    }, 150);
});