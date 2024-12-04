const products = [
    {name:'phone', price:12000, brand:'xiami', color:'gray'},
    {name:'watch', price:1500, brand:'skimi', color:'silver'},
    {name:'sunglass', price:150, brand:'ray ban', color:'black'},
    {name:'camera', price:32000, brand:'canon', color:'white'},
    {name:'laptop', price:78000, brand:'hp', color:'yellow'},
    {name:'printer', price: 3000, brand:'canon', color:'white'}
]


const student = {
    name:["junayed", "ahmed"],
    age:22,
    occapation: "student",
    language: "bangla and english",
};


console.log(student)
const studentJAYSON = JSON.stringify(student)
console.log(studentJAYSON)
const removeJayson = JSON.parse(studentJAYSON)
console.log(removeJayson)


const newItem = {name:'water bottle', price:400, brand:"rc", color:"blue"}

const newProducts = [...products, newItem]
console.log(newProducts)


const removeAProduct = newProducts.filter(product=> product.name !== 'water bottle')
console.log(removeAProduct)