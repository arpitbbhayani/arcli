const init = require('./init');
const Commander = require('commander');

module.exports = () => Commander.parse(init.getArgv());
