require('./about.css');

var $ = require('./../vendor/js/jquery.min.js');


const name = 'About';

setTimeout(() => {$('body').append(`<p>Welcome to ${name} Page.</p>`)}, 1000);