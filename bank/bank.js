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
let balance = 0;
function deposit(amount){
  if (amount > 0){
    balance = balance + amount;
  } else{
    console.error('Cannot deposit negative amounts');
  }
  return balance;
}

console.log(deposit(50));
console.log(deposit(9.57));

function withdrawl(amount){
  if (amount < balance){
    balance = balance - amount;
  } else{
    console.error('Cannot withdrawl more than the amount of money in the bank')
  }
  return balance;
}

console.log(withdrawl(25));
