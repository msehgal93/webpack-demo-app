require('./main.css');

var $ = require('./../vendor/js/jquery.min.js');


const name = 'Main';

setTimeout(() => {$('body').append(`<p>Welcome to ${name} Page.</p>`)}, 1000);