let age = 32;
const name = "junayed ahmed";

let numbers = [23,54,234,45,56,34,36,67];

for(let i = 0; i<numbers.length; i++){
    let number = numbers[i];
    console.log(number)
}


function multiply(num1,num2){
    let sum = num1 * num2;
    return sum
}

let result = multiply(3,50);
console.log(result)

const student = {
    name:"junayed ahmed",
    age:22,
    occapation: "student",
    language: "bangla and english"
}
console.log(student.age)
let partial = student["name"]
console.log(partial);

const myVariable = "language";
console.log(student[myVariable])

