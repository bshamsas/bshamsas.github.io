class savingsaccount extends Account{

  constructor(number, interest){
    super(number);
    this._interest = interest;
  }
 
 getInterest(){
  return this._interest;
}

setInterest(interest){
  this._interest = interest;
}

addInterest(){
  //const amount = this._balance * this._interest / 100;
  return (this._balance += this._balance * (this.interest / 100));
  //super.deposit(amount);
}
toString() {
  return "Account " + this._number + ": balance " + this._balance + " interest" + this.interest;
}

endOfMonth() {
  return (
    "Interest added " +
    this.constructor.name +
    " " +
    this._number +
    ": " +
    -(this._balance - this.addInterest()) +
    " balance " +
    this._balance +
    " interest: " +
    this.interest
  ); //Interest added SavingsAccount 1: 60 balace 560 interest: 12
}
}




