// shorthand
var x = 2;
x += 10;
console.log(x); // 12

var y = 3;
y /= 3;
console.log(y); // 1

// unary operators
var z = 1;
++z;
console.log(z); // 2

z = 2;
--z;
console.log(z); // 1
console.log(z--);
console.log(z);

// converting between strings and numbers
var c = 3.14;
console.log(typeof c.toString()); // string
console.log(c.toFixed(1)); // 3.1
console.log(c.toFixed(3)); // 3.140

var num = Number('123');
console.log(typeof num + num);

// not a number function
console.log(Number('asdf')); // Nan
console.log(isNaN('123')); // false
console.log(isNaN('abc')); // true
console.log(isNaN(42)); // false
console.log(isNaN(Number('abc'))); // true






