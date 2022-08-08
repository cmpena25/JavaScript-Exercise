var a = 1
console.log(a); // 1

var b = a++;
console.log(b); // 1

var c = ++a;
console.log(c); // 2
console.log(a); // 3

var d = "hello";
console.log(d); // hello
var e = 'false';
console.log(d++); // NaN
console.log(e++); // NaN

var price = 2.7;
console.log(price.toFixed(2)); // 2.70

console.log(isNaN(0)); // false
console.log(isNaN(1)); // false
console.log(isNaN("")); // false
console.log(isNaN("string")); // true
console.log(isNaN("0")); // false
console.log(isNaN("1")); // false
console.log(isNaN("3.145")); // false
console.log(isNaN(Number.MAX_VALUE)); // false
console.log(isNaN(Infinity)); // false
console.log(isNaN("true")); // true
console.log(isNaN(true)); // false
console.log(isNaN("false")); // true
console.log(isNaN(false)); // false

console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true
console.log(!!false); // false
console.log(!!0); // false
console.log(!!-0); // false
console.log(!!1);  // true
console.log(!!-1); // true
console.log(!!0.1); // true
console.log(!!"hello"); // true
console.log(!!""); // false
console.log(!!"false"); // true
console.log(!!"0"); // true

// string examples
var sample = "Hello Celeste";
console.log(sample.length); // 12
console.log(sample.toUpperCase());
sample = "Hello Celeste Pena"
console.log(sample);
console.log(sample.replace('Pena', 'Michelle')); // Celeste Michelle
console.log(sample.indexOf('C')); // 6
console.log(sample.substring('6', '13')); // Celeste

// scenarios
var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;
var cost = 3;
console.log((littleMermaid *= cost) + (brotherBear *= cost) +(hercules *= cost)); // 27

var google = 400;
var amazon = 380;
var facebook = 350;
console.log((google * 6) + (amazon * 4) + (facebook * 10));






