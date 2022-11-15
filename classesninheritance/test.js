"use strict";

describe("Account", function () {

    describe("check the account info after create", function (){
        const account = new Account(5600000010);

        it("check the account number", function () {
            assert.equal("5600000010", account.getNumber());
        });
    
        it("check the account balance", function () {
            assert.equal("0", account.getBalance());
        });
    });

    describe("check the account info after deposit 8000.40", function (){
        const account = new Account(5600000010);
        account.deposit(8000.40);

        it("check the account balance", function () {
            assert.equal("8000.40", account.getBalance());
        });
    });

    describe("check the account info after withdraw 2500.50", function (){
        const account = new Account(5600000010);
        account.deposit(5000.50);
        account.withdraw(2500.50);

        it("check the account balance", function () {
            assert.equal("2500", account.getBalance());
        });

        it("test toString method", function () {
            assert.equal("Account 5600000010: balance 2500", account.toString());
        });
    });

});

//setInterest test
describe("setInterest", function () {
  it(" sets interset of an account", function () {
    const savingsAcc = new savingsaccount(1, 12);
    savingsAcc.setInterest(20);
    assert.equal(20, savingsAcc._interest);
  });
});

//getInterest test
describe("getInterest", function () {
  it("gets value of interset of an account", function () {
    const savingsAcc = new savingsaccount(1, 12);
    assert.equal(12, savingsAcc.getInterest());
  });
});

//addInterest test
describe("addInterest", function () {
  it("add interest to an account", function () {
    const savingsAcc = new savingsaccount(1, 12);
    savingsAcc.deposit(500);
    assert.equal(560, savingsAcc.addInterest());
  });
});

//endOfMonth test
describe("endOfMonth", function () {
  it("gives info on the account which interest has been added to", function () {
    const savingsAcc = new savingsaccount(1, 12);
    savingsAcc.deposit(500);
    assert.equal(
      "Interest added SavingsAccount 1: 60 balance 560 interest: 12",
      savingsAcc.endOfMonth()
    );
  });
});

//toString test
describe("toString", function () {
  it("returns the object details in given string format", function () {
    const savingsAcc = new savingsaccount(1, 12);
    savingsAcc.deposit(500);
    assert.equal(
      "Account 1: balance 500 SavingsAccount Interest: 12",
      savingsAcc.toString()
    );
  });
});

/**
 *  checking test
 */
describe("setOverdraftAmount", function () {
  it("sets Overdraft amount of a checking account", function () {
    const checkingAcc = new CheckingAccount(1, 500);
    checkingAcc.setOverdraftAmount(600);
    assert.equal(600, checkingAcc.overdraftAmount);
  });
});

describe("getOverdraftAmount", function () {
  it("gets Overdraft amount of a checking account", function () {
    const checkingAcc = new CheckingAccount(1, 500);
    assert.equal(500, checkingAcc.getOverdraftAmount());
  });
});

describe("withdraw", function () {
  it("withdraw money in consideration of Overdraft amount", function () {
    const checkingAcc = new CheckingAccount(1, 500);
    checkingAcc.deposit(600);
    assert.throws(() => {
      checkingAcc.withdraw(1200);
    }, "Withdraw amount is above overdraft amount. can't withdraw");
  });
});

describe("toString", function () {
  it("returns the object details in given string format", function () {
    const checkingAcc = new CheckingAccount(1, 500);
    checkingAcc.deposit(500);
    assert.equal(
      "Account 1: balance 500 CheckingAccount Overdraft amount: 500",
      checkingAcc.toString()
    );
  });
});

describe("endOfMonth", function () {
  it("gives warning on the account which balance is less than zero", function () {
    const checkingAcc = new CheckingAccount(1, 500);
    checkingAcc.deposit(600);
    checkingAcc.withdraw(800);
    assert.equal(
      "Warning, low balance account number:1 balance: -200 overdraft limit:500",
      checkingAcc.endOfMonth()
    );
  });
});
/**
 *  bank test
 */

describe("addAccount", function () {
  it("add new account to array of accounts", function () {
    const cbe = new Bank();
    let acc = cbe.addAccount();
    assert.equal(cbe.accounts[0], acc);
  });
});

describe("addSavingAccount", function () {
  it("add new savings account to array of accounts", function () {
    const cbe = new Bank();
    let acc = cbe.addSavingAccount(5000);
    assert.equal(cbe.accounts[0], acc);
  });
});

describe("addCheckingAccount", function () {
  it("add new checking account to array of accounts", function () {
    const cbe = new Bank();
    let acc = cbe.addCheckingAccount(500);
    assert.equal(cbe.accounts[0], acc);
  });
});

describe("closeAccount", function () {
  it("removes account from array of accounts", function () {
    const cbe = new Bank();
    cbe.addSavingAccount(5500); //1004
    const acc = cbe.addCheckingAccount(500); //1005
    cbe.addAccount(); //1006
    assert.equal(acc, cbe.closeAccount(1005)[0]);
  });
});

describe("accountReport", function () {
  it("returns a string with each account on its own line", function () {
    const cbe = new Bank();
    cbe.addSavingAccount(5500);
    cbe.addCheckingAccount(500);
    cbe.addAccount();
    const str =
      "Account 1007: balance 3500 SavingsAccount Interest: 5500  Account 1008: balance -100 " +
      "CheckingAccount Overdraft amount: 500  Account 1009: balance 3000";
    assert.equal(str, cbe.accountReport());
  });
});

describe("nextNumber", function () {
  it("returns next account number", function () {
    assert.equal(1010, Bank.nextNumber());
  });
});

describe("endOfMonth", function () {
  it("returns accounts status by the end of the month", function () {
    const cbe = new Bank();
    cbe.addSavingAccount(5500);
    cbe.addCheckingAccount(500);
    cbe.addAccount();
    const str =
      "Interest added SavingsAccount 1011: 192500 balance 196000 interest: 5500\nWarning, low balance account number:1012 balance: -100 overdraft limit:500\n";
    assert.equal(str, cbe.endOfMonth());
  });
});


// describe("SavingsAccount", function () {

//     describe("check the account info after interest is deposited", function (){
//         const account = new SavingsAccount(5600000020, 10);
        
//         account.deposit(1000);
//         account.addInterest();

//         it("check the account balance", function () {
//             assert.equal("1100", account.getBalance());
//         });

//         it("test toString method", function () {
//             assert.equal("Account 5600000020: balance 1100: interest 10%", account.toString());
//         });
//     });

// });

// describe("CheckingAccount", function () {

//     describe("check the account info for negative balance", function (){
//         const account = new CheckingAccount(5600000030, 200);
        
//         account.deposit(2500);
//         account.withdraw(2600);

//         it("check the account balance", function () {
//             assert.equal("-100", account.getBalance());
//         });

//         it("test toString method", function () {
//             assert.equal("Account 5600000030: balance -100: overdraft limit 200", account.toString());
//         });
//     });

// });

// describe("Bank", function () {

//     describe("Add all types of bank and check the account report", function (){
//         const bank = new Bank();

//         const acnr = bank.addAccount();
//         const savingAcnr = bank.addSavingsAccount(10);
//         const checkingAcnr = bank.addCheckingAccount(2000);

//         it("check account info for all accounts", function () {
//             assert.equal("Account 2001: balance 5000\nAccount 2002: balance 7000: interest 10%\nAccount 2003: balance -150: overdraft limit 2000", bank.accountReport());
//         });

//     });

//     describe("Add all types of bank and remove the saving account", function (){
//         const bank = new Bank();

//         const acnr = bank.addAccount();
//         const savingAcnr = bank.addSavingsAccount(10);
//         const checkingAcnr = bank.addCheckingAccount(2000);

//         bank.closeAccount(savingAcnr);

//         it("check account info for all accounts", function () {
//             assert.equal("Account 2004: balance 5000\nAccount 2006: balance -150: overdraft limit 2000", bank.accountReport());
//         });

//     });

//     describe("Add all types of bank and check end of month report", function (){
//         const bank = new Bank();

//         const acnr = bank.addAccount();
//         const savingAcnr = bank.addSavingsAccount(10);
//         const checkingAcnr = bank.addCheckingAccount(2000);

//         it("check end of month report", function () {
//             assert.equal("Interest added SavingsAccount 2008: balance: 7700 interest: 700\nWarning, low balance CheckingAccount 2009: balance: -150 overdraft limit: 2000", bank.endOfMonth());
//         });

//     });

// });