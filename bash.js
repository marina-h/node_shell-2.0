var commands = require('./commands');
var chalk = require('chalk');

// Output a prompt
process.stdout.write(chalk.yellow(('prompt > ')));

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var command = cmd.split(' ')[0];
  var args = cmd.split(' ').slice(1).join(' ');
  // var output;
  if (command === 'pwd') {
    commands.pwd('.', done);
  }
  if (command === 'ls') {
    commands.ls(args, done);
  }
  if (command === 'date') {
    commands.date('.', done);
  }
  if (command === 'echo') {
    commands.echo(args, done);
  }
  if (command === 'cat') {
    commands.cat(args, done);
  }
  if (command === 'head') {
    commands.head(args, done);
  }
  if (command === 'tail') {
    commands.tail(args, done);
  }
});

var done = function(output) {
  process.stdout.write(chalk.green(output));
  process.stdout.write(chalk.yellow(('\nprompt > ')));
}
