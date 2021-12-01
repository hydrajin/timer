// Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments

// Add command line arguments (User determines the number of alarms);
const myArgs = process.argv.slice(2); // Will be an array... How do we iterate? => for c style or of loop?


for (let arg of myArgs) { // USER determined... Therefore no limit
  console.log('myArgs: ', arg);


}
process.stdout.write('\x07');