class Bank{
constructor(){
this.accountList = [];
}
static  accountNumber= 2000;
static nextAccount(){
    return accountNumber++;
}
addAccount(){
   const nextAccNum = Bank.nextNumber();
   let acc = new this.accountList(nextAccNum);
}

addSavingsAccount(interest){
    const nextAccNum = Bank.nextNumber();
    let acc = new this.addSavingsAccount(nextAccNum, interest);
    this.accountList.push(acc);
}

addCheckingAccount(overdarft){
    const nextAccNum = Bank.nextNumber();
    let acc = new this.addCheckingAccount(nextAccNum, overdraftAmt);
 this.accountList.push(acc)
}
closeAccount(number){
    constindex = this.accountList.indexOf(number);
    return this.accountList.splice(index , 1);
}

accountReport(){
    let accountStrings = " ";
    accountStrings.forEach(element => accountStrings = element.toString + "\n");
    return accountStrings;
}

endOfMonth(){
    return this.accountList.reduce((accum, elem) => (accum !== "" ? accum + "\n" : "" ) + elem.endOfMonth(), '');
}


}