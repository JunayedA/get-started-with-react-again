const numbers = [3,245,24,567,23,64345,345567,34,67];
const student = {
    name:"junayed ahmed",
    age:22,
    occapation: "student",
    language: "bangla and english"
};

const bioData = `my name is ${student.name} and my age is ${student.age} and my id number is ${numbers[2]}`
console.log(bioData);

const myFunction = () => 34;
const arrayFunction = x => x*4;
console.log(arrayFunction(4))
console.log(myFunction())
const isEven = x => x%2==0
console.log(isEven(5))
const multipleArrayFunctionLine = (x, y, z)=>{
    let sum = x + y+z;
    return sum;
}

console.log(multipleArrayFunctionLine(34,45,6))

numbers.push(3445);
numbers.push(3445);
numbers.push(3445);
console.log(numbers)

const newNumber = [...numbers,77,88,99];
console.log(newNumber)