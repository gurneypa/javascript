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
const fs = require('fs');

let balance = 0;
let history = [];

function init() {
  try {
    const contents = JSON.parse(fs.readFileSync('bank.json', 'utf8'));
    balance = contents.balance;
    history = contents.history;
  } catch(err) {
    console.log('Could not load bank file - starting fresh');
  }
}

function saveInfo() {
  const data = {
    balance,
    history
  };
  fs.writeFileSync('bank.json', JSON.stringify(data));
}

function deposit(amount){
  if (amount > 0){
    balance = balance + amount;
    history.push(`deposited ${amount} balance is now ${balance}`);
    saveInfo();
  } else{
    console.error('Cannot deposit negative amounts');
  }
  return balance;
}

function withdrawl(amount){
  if (amount < balance){
    balance = balance - amount;
    history.push(`withdrawl ${amount} balance is now ${balance}`);
    saveInfo();
  } else{
    console.error('Cannot withdrawl more than the amount of money in the bank')
  }
  return balance;
}

function showHistory(){
  console.log();
  console.log(`Transaction history`);
  console.log(`----------------`);

  history.forEach(item => {
    console.log(item);
  });
  console.log();
}

function showMenu() {
  console.log('Choose from the following options');
  console.log('------------');
  console.log('1-Deposit');
  console.log('2-Withdrawl');
  console.log('3-ShowHistory');
  console.log('4-Quit');
}

let command = 0;
process.stdin.on('data', text =>{
  text = text.trim();

  if (command > 0) {
    if (command === 1) {
      deposit(parseFloat(text));
      command = 0;
    } else if (command === 2) {.0
      withdrawl(parseFloat(text));
      command = 0;
    }
  } else {
    switch(text){
      case '1':
        console.log('Enter deposit amount:');
        command = 1;
        break;
      case '2':
        console.log('Enter withdrawl amount:');
        command = 2;
        break;
      case '3':
        showHistory();
        break;
      case '4':
        process.exit();
        break;
      default:
      console.error(`unknown text ${text}`);
    }
  }
if (command === 0) {
  showMenu();
  }

});
init();
showMenu();
/*
showMenu();
console.log(deposit(50));
console.log(deposit(9.57));
console.log(withdrawl(25));
showHistory();
showMenu();
*/
