#!/usr/bin/node

var exec = require('child_process').exec;

console.log('clone node-sass...');
exec('git clone https://github.com/sass/node-sass.git node-sass', function(err) {
	if (err) {
		console.log(err);	
	} else {
		console.log('clone success');
	}
	console.log('\r\nStart download binary...\r\n');
	require('./download.js');
});
