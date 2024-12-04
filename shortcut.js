// false value: '', 0, false, null, undefine

let money = 800;
const person = 4;
 let food = 100<money ? "briyani khabo":"cha biscuits khabo"
 console.log(food)
 let trt = (money>200 && person< 5) ? 'coffee kha' : 'cha kha'
 console.log(trt);

 number = 453534;
 console.log(number)
 let strNumber = number + ''
 console.log(strNumber)

 let stringNumber = '33434'
//  console.log(Number(stringNumber))
let strNumbertoNumber = +stringNumber;
// console.log(strNumbertoNumber);
// console.log(parseInt(stringNumber))
// console.log(parseFloat(stringNumber))
let num = ~~stringNumber;
console.log(num)



let isActive = true;
isActive = !isActive;
const showUser = () => console.log("display user")
const hideUser = () => console.log("user is not available")

// isActive ? showUser() : hideUser()
// isActive && showUser();
isActive || hideUser();
