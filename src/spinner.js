const ora = require('ora');
const config = require('./config');
const Consoler = require('./consoler');

let _instance = null;

function stopAndPrint(text, consolerFunction) {
    const fancy = config.get('fancy', false);
    if (!fancy) { return Consoler.plain(text); }
    if (!_instance) { _instance = ora(text); }
    _instance.stop();
    return consolerFunction(text);
}

module.exports = {
    start(text) {
        const fancy = config.get('fancy', false);
        if (!fancy) { return Consoler.plain(text); }
        if (!_instance) {
            _instance = ora(text);
        }
        return _instance.start(text);
    },
    success(text) {
        return stopAndPrint(text, Consoler.success);
    },
    fail(text) {
        return stopAndPrint(text, Consoler.fail);
    },
    message(text) {
        return stopAndPrint(text, Consoler.message);
    },
    tell(text) {
        return stopAndPrint(text, Consoler.tell);
    },
    plain(text) {
        return stopAndPrint(text, Consoler.plain);
    },
};
