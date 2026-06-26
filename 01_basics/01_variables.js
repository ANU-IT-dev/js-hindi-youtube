const accountId = 12344
let accountEmail ="anupriaa@gmail.com"
var accountPassword ="12345"
accountCity ="Ranchi"
let accountState; //it will be undefined cuz there is no value assigned to it

//accountId =2 // not allowed cuz account ud is const cant change it

accountEmail ="guptajii.com"
accountPassword ="2132132"
accountCity ="bengalulru"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
