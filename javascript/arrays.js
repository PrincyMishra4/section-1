const myArray = [ 367, "hello", true, console.log];

console.log(myArray);


const fruits = ['apple', 'orange', 'banana', 'pineapple', 'lichi', 'mango'];
console.log(fruits);

console.log(fruits.length);


// indexing

console.log( fruits[4] );
console.log(fruits[1] );
console.log(fruits[40] );

console.log( fruits.at(-5) );

//slicing

console.log( fruits.slice(1, 4));
console.log(fruits.slice(1, -2) );
console.log(fruits.slice(1) );
console.log(fruits.slice(1,50) );
console.log(fruits.slice() );

//adding elements to array
console.log("\n----------------\n");
console.log( fruits);
fruits.push('guava'); // adds element at the end
fruits.unshift('cherry'); // adds element at the beginning

console.log(fruits);

//removing elements form array
fruits.pop(); //removes element form the end
fruits.shift(); //removes element form the beginning
console.log(fruits);

// fruits.splice(1,2); this will only remove elements
// fruits.splice(1,2, 'strawberry', 'dragon fruit', 'kiwi'); this will remove and add elements
fruits.splice(1, 0, 'strawberry', 'dragon fruit', 'kiwi')
//this will insert elements

console.log(fruits); 
