#!/usr/bin/node

var exec = require('child_process').exec;

exec('git clone https://github.com/sass/node-sass.git node-sass');
require('./download.js');
