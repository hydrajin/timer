// Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments

// Add command line arguments (User determines the number of alarms);
const myArgs = process.argv.slice(2); // Will be an array... How do we iterate? => for c style or of loop?
const result = [];


for (let arg of myArgs) { // USER determined... Therefore no limit
  if (arg <= 0) {
    return console.log(`Please numbers greater than 0! ${result}`);
  }
  if (isNaN(arg) /*|| arg === undefined*/) {  // not working?
    return console.log(`Please enter a number! ${result}`);
  }
  // console.log('myArgs: ', arg); // Just displays arg values
  process.stdout.write(`TIMER WILL BEEP IN: ${arg} seconds \n`);
  setTimeout(() => {
    process.stdout.write('\x07' + `${arg} *BEEP \n`);
  }, arg * 1000);
}
