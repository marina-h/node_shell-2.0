var fs = require('fs');
var chalk = require('chalk');

var pwd = function(file, done) {
  var output = __dirname;
  done(output);
}

var ls = function(file, done) {
  var dir = file || '.';
  var output;
  return fs.readdir(dir, function(err, data){
    if (err) throw err;
    output = data.toString().split(',').join(' ');
    done(output);
  });
}

var date = function(file, done) {
  var output =  Date();
  done(output);
}

var echo = function(file, done) {
  var output;
  if (file[0] === '$') {
    var envVariable = file.slice(1);
    output = process.env[envVariable];
  } else {
    output = file;
  }
  done(output);
}

var cat = function(file, done) {
  var output;
  var fileNames = file.split(' ');
  var numReadFiles = 0;
  fileNames.forEach(function(name) {
    fs.readFile(name, function(err, data){
      if (err) throw err;
      output += data;
      numReadFiles++;
      if (numReadFiles === fileNames.length) done(output);
    });
  });
}

var head = function(file, done) {
  var output;
  return fs.readFile(file, function(err, data){
    if(err) throw err;

    output = data.toString().split("\n").slice(0,5).join("\n");
    done(output);
  });
}

var tail = function(file, done) {
  var output;
  return fs.readFile(file, function(err, data){
    if(err) throw err;
    var lines = data.toString().split("\n")
    var startLine = lines.length < 5 ? 0 : lines.length - 5;
    output = lines.slice(startLine).join("\n");
    done(output);
  });
}



module.exports = {
  pwd : pwd,
  ls : ls,
  date: date,
  echo: echo,
  cat: cat,
  head: head,
  tail: tail,
}
