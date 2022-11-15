class Checkingaccount extends Account{
    constructor( number, overdraftlimit){
        super(account);
        this._overdraftlimit = overdraftlimit;
    
    }
 set overdraftlimit(value){
    return this._overdraftlimit = value;
 }
  
 get overdraftlimit(){
    return this._overdraftlimit;
  }

  withdraw(amount) {
    if (amount > (this._balance + this._overdraftLimit)) {
        throw new RangeError("Withdraw amount has to be within Overdraw limit");
    }
        if (amount <= 0) {
           throw new RangeError("withdraw amount has to be greater than 0");
        }
        this._balance -= amount;

        if (amount < this._balance) {
            alert("withdraw possible!Please continue");
         }
         
    }


    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": overdraft limit " + this._overdraftLimit;

      }
      endOfMonth() {
        if(this._balance < 0)
            return `Warning, balance is low ${this.constructor.name} ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraftLimit}`;
    }


    }
