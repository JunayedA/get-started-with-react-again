let numbers =[ 234,45,67,23,77,4,23];
const x = numbers[0];
const y = numbers[1];
const z = numbers[2];
console.log(x,y,z)
// const [first, secound] = [32,23]
const [first, secound] = numbers;
console.log(first, secound)

const student = {
    name:["junayed", "ahmed"],
    age:22,
    occapation: "student",
    language: "bangla and english",
};

const [firstName, secoundName] = student.name;
console.log(firstName,secoundName);


const employee = {name: "junayed", designation:"developer", age:32,
    mobile:{
        brand:'xiami', color:"black", using:"5year", screen:"ips"
    },
    language:["html", "css", "java", "paython"]
}

const {brand}= employee.mobile
console.log(brand)

const [lan1, lan2, lan3] = employee.language
console.log(lan1,lan2,lan3)


