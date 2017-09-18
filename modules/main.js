require('./main.css');
import { forMain } from './about'


function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    'forMain said - ' + forMain()
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());


// const name = 'Main';

// setTimeout(() => {$('body').append(`<p>Welcome to ${name} Page.</p>`)}, 1000);

// var loadAbout = function() {
//   console.log('called');
//   require.ensure([], function() {
//     require('./about');
//   });
//   return false;
// }
// setTimeout(loadAbout, 2000);

// module.exports = {
//   loadAbout: function() {
//     require.ensure([], function() {
//       require('./about.js').show();
//     });
//     return false;
//   }
// }