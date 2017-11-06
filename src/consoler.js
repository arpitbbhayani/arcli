const chalk = require('chalk');
const emoji = require('node-emoji');

module.exports = {
    success: text => console.log(`${emoji.get('sign_of_the_horns')}  ${chalk.green.bold(text)}`),
    fail: text => console.log(`${emoji.get('pensive')}  ${chalk.red.bold(text)}`),
    message: text => console.log(`${chalk.white.bold(text)}`),
    tell: text => console.log(`${emoji.get('loudspeaker')}  ${chalk.yellow.bold(text)}`),
    plain: text => console.log(text),
};
