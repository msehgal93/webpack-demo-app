require('./main.css');

var $ = require('./../vendor/js/jquery.min.js');


const name = 'Mohit Sehgal';

setTimeout(() => {$('body').append(`<p>Hello there from ${name}</p>`)}, 1000);