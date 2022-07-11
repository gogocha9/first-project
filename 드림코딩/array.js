'use strict';
// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index poition
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

console.log("-----------------------------------------------");
// 3. Looping over an array
// print all fruits
console.log("-----------------------------------------------");
// a. for
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("-----------------------------------------------");
// b. for of
for(let fruit of fruits) console.log(fruit);

console.log("-----------------------------------------------");
// c. forEach
fruits.forEach((fruit) => console.log(fruit));

console.log("-----------------------------------------------");
// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

console.log("-----------------------------------------------");
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

console.log("-----------------------------------------------");
// unshift: add an item to the benigging
fruits.unshift('🍓', '🍋');
console.log(fruits);

console.log("-----------------------------------------------");
// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

console.log("-----------------------------------------------");
// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

fruits.splice(1, 1, '🥝', '🍉');
console.log(fruits);

fruits.splice(1);
console.log(fruits);

// combine two arrays
console.log("-----------------------------------------------");
const fruits2 = ['🍌'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.log("-----------------------------------------------");
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('null'));
console.log("-----------------------------------------------");
console.log(fruits.includes('🍎'));
console.log(fruits.includes('null'));

// lastIndexOf
console.log("-----------------------------------------------");
fruits.push('🍎')
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));