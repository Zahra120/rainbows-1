var colors = require('colors');

function makeRainbows(string) {
  ['random', 'white', 'yellow', 'green', 'cyan', 'blue', 'red', 'magenta'].forEach(function(color) {
    console.log(colors[color](string));
  });

  // same as:
  // console.log(colors.random(string));
  // console.log(colors.white(string));
  // console.log(colors.yellow(string));
  // console.log(colors.green(string));
  // console.log(colors.cyan(string));
  // console.log(colors.blue(string));
  // console.log(colors.red(string));
  // console.log(colors.magenta(string));
}

for (var i = 2; i < process.argv.length; i++) {
  setInterval(makeRainbows, 300, process.argv[i]);
}
