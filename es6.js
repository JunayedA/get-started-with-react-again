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
console.log(myFunction())

numbers.push(3445);
numbers.push(3445);
numbers.push(3445);
console.log(numbers)

const newNumber = [...numbers,77,88,99];
console.log(newNumber)