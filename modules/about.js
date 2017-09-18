require('./about.css');

// ONLY this function gets exported in main
export function forMain(argument) {
  return 'for main';
}

// this function isn't exported
export function not_forMain(argument) {
  return 'not for main';
}