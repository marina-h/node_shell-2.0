var pwd = function(cmd) {
  if (cmd === 'pwd') {
    process.stdout.write(__dirname);
  }

}

var ls = function(cmd) {
  if(cmd === 'ls') {
    process.stdout.write(fs.readdirSync(__dirname));
  }
}

module.exports = {
  pwd : pwd,
  ls : ls,
}
