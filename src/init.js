const arcliConfig = require('./config');

let proc = null;

module.exports = {
    setup: (arcliProcess, configurations) => {
        proc = arcliProcess;
        arcliConfig.add(configurations);
    },
    getArgv() {
        return proc.argv;
    },
};
