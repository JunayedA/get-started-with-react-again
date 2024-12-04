const array = [34,45,6,7,4756,345,6745,567,4,6,34,45]
const maping = array.map(Math.sqrt)
let x = Math.sqrt(9);
const square = Math.pow(5,4)
console.log(square)
console.log(x)
console.log(maping)

const products = [
    {name:'phone', price:12000, brand:'xiami', color:'gray'},
    {name:'watch', price:1500, brand:'skimi', color:'silver'},
    {name:'sunglass', price:150, brand:'ray ban', color:'black'},
    {name:'camera', price:32000, brand:'canon', color:'white'},
    {name:'laptop', price:78000, brand:'hp', color:'yellow'},
    {name:'printer', price: 3000, brand:'canon', color:'white'}
]

const brandNames = products.map(product => product.brand)
const prices = products.map(product => product.price)
console.log(brandNames);
console.log(prices);

products.forEach(product => console.log(product.name));

let isItCheap = products.filter(product => product.price<5000)
let isItCheapFind = products.find(product => product.price<5000)
console.log(isItCheap)
console.log(isItCheapFind)

// const isItMadeOfCanon = products.filter(product => product.name.search('canon'))
const isItMadeOfCanon = products.filter(product => product.brand.includes('canon'))
console.log(isItMadeOfCanon)

