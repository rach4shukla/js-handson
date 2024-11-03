const accountId = 144;
let accountEmail = "rachna@gmail.com";
var accountPassword = "123rach";

accountCity = "Cambridge";

// accountId = 2;  Single line Comment
accountEmail = "prashant@gmail.com";
accountPassword = "456kashu";
accountCity = "Lucknow";

let accountState;

/* 
const ==> cannot be changed
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
