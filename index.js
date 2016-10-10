var chalk = require('chalk');

function makeRainbows(string) {
  ['white', 'yellow', 'green', 'cyan', 'blue', 'red', 'magenta'].forEach(function(color) {
    console.log(chalk[color](string));
  });

  // same as:
  // console.log(chalk.white(string));
  // console.log(chalk.yellow(string));
  // console.log(chalk.green(string));
  // console.log(chalk.cyan(string));
  // console.log(chalk.blue(string));
  // console.log(chalk.red(string));
  // console.log(chalk.magenta(string));
}

for (var i = 2; i < process.argv.length; i++) {
  setInterval(makeRainbows, 300, process.argv[i]);
}
