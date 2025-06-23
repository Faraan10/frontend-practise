function bankAccount() {
  let balance = 1000; // here this a private varibale cannot be accessed by users

  function deposit(amount) {
    balance += amount;
    console.log(`Deposited amount is ${amount} and balance is ${balance}`);
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log("Insufficient funds");
    } else {
      balance -= amount;
      console.log(
        `Withdraw amount is ${amount} and remaining balance is ${balance}`
      );
    }
  }

  function getBalance() {
    console.log(`Balance amount is ${balance}`);
  }

  return {
    deposit,
    withdraw,
    getBalance,
  };
}

const bank = bankAccount();

bank.deposit(400);
bank.withdraw(500);
bank.getBalance();
console.log(bank.balance); // we will get undefined
