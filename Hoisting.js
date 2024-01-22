/*//Hoisting
//Variable Hoisting
console.log(a)
var a=10  //op is undefined

console.log(a)
let a=10  //op is reference error*/

//Functional Hoisting
konguclg(1,2)
function konguclg(a,b)
{
console.log(a,b)
}