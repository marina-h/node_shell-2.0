var commands = require('./commands');
var fs = require('fs');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  commands.pwd(cmd);
  commands.ls(cmd);

  if (cmd === 'date') {
    process.stdout.write(Date());
  }

  process.stdout.write('\nprompt > ');

});
