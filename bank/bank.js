/*
Simulate a bank with the following functions

Use a variable to keep track of the balance

Use a variable to keep track of the account history

function deposit(amount){
  // Make sure that the amount is a positive number

  // Record the deposit in the history
}

function withdrawl(amount) {
  // Make sure that there is enough money in the account before taking it out

  // Record the withdrawl in the history
}

function showHistory() {
  // Show the history
}


function showMenu() {
  // Show a menu of what the user can do
}

*/
process.stdin.resume();
process.stdin.setEncoding('utf8');

let balance = 0;
let history = [];

function deposit(amount){
  if (amount > 0){
    balance = balance + amount;
    history.push(`deposited ${amount} balance is now ${balance}`);
  } else{
    console.error('Cannot deposit negative amounts');
  }
  return balance;
}

function withdrawl(amount){
  if (amount < balance){
    balance = balance - amount;
    history.push(`withdrawl ${amount} balance is now ${balance}`);
  } else{
    console.error('Cannot withdrawl more than the amount of money in the bank')
  }
  return balance;
}

function showHistory(){
  history.forEach(item => {
    console.log(item);
  });
}

function showMenu() {
  console.log('Choose from the following options');
  console.log('------------');
  console.log('1-Deposit');
  console.log('2-Withdrawl');
  console.log('3-ShowHistory');
  console.log('4-Quit');
}

process.stdin.on('data', command =>{
  console.log(typeof command);
  console.log(`command is ${command}`);
  command = command.trim();
  switch(command){
    case '1':
      break;
    case '2':
      break;
    case '3':
      break;
    case '4':
      process.exit();
      break;
    default:
    console.error(`unknown command ${command}`);
  }

  showMenu();
});

console.log(deposit(50));
console.log(deposit(9.57));
console.log(withdrawl(25));
showHistory();
showMenu();
