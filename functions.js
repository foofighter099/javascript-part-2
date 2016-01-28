//Question 1
/*var myArray = ["Andrew", "Macintosh"];
myArray.sort(function(a,b) {
    return a.length<b.length
})
console.log(myArray)


//Question 2


var person1 = {
    name: "Fndrew",
    email: "fndrewtognarini@gmail.com"
}
var person2 = {
    name: "Dre",
    email: "dre@gmail.com"
}

var person3 = {
    name: "Alibaba",
    email: "alibaba@gmail.com"
}

var arr = [person1, person2, person3]

arr.sort(function(a,b) {
    if (a.name.length < b.name.length)
    return (a.name.length<b.name.length)
})

console.log(arr)

arr.sort(function(a,b) {
    if (a.email>b.email)
    return 1
})
console.log(arr)


//Question 3
//Create a function that can be used with Array.prototype.map. 
//This function should take a number and return its square. 
//Then, use this function with map on an array of numbers to check the result.
var numbers = [1, 2, 3];
var square = numbers.map(sqr)

function sqr(num) {
   return num*num
}

console.log(square)


//Question 4
//Create a function that can be used with Array.prototype.map.
//This function should be able to take an object and square its “num” property.
//Then, use this function with map on an array of objects each containing a “num” property.
var person1 = {
    num: 18,
}
var person2 = {
    num: 4
}

var person3 = {
    num: 26
}

var arr = [person1, person2, person3]


var square = arr.map(sqr)

function sqr(obj) {
   return obj.num*obj.num;
}

console.log(square)

//Question 5

function operationMaker(operation) {
switch (operation) {
   case 'add':
       return function add(a,b) {
           return a + b
       }
       
    case 'subtract':
        return function subtract(a,b) {
           return a - b
       }
       
    case 'mult':
        return function mult(a,b) {
           return a * b
       }
       
    case 'div':
        return function div(a,b) {
           return a / b
       }
       
     default:
        console.log("Bad operation!");
        break;
};
}

console.log(operationMaker('subtract')(4,5));
console.log(operationMaker('add')(4,5));
console.log(operationMaker('mult')(4,5));
console.log(operationMaker('div')(4,5));
*/