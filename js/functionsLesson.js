function addition(x , y) {
    return x + y;
}
var three = addition(1, 2);
console.log(three);

var four = addition(2, 2);
console.log(four);

var five = addition(2, 3);
console.log(five);


var fortyTwo = '42';
console.log(parseInt(fortyTwo));

console.log(typeof fortyTwo);

function increment(x){
    return x + 1;
}

var six = increment(5);
console.log(six);


var decrement = function(x) {
    return x - 1;
}

var eight = decrement(9);
console.log(eight);

// global var

var globalVar = "Look, I'm Global!";
function sayHello() {
    alert(globalVar);
}

sayHello();

function sayMyName(name) {
    alert("Hello " + name.toUpperCase());
}

sayMyName("celeste");

// local var

function scope() {
    var localVar ="Look, I'm Local!";
    alert(localVar);
    alert(globalVar);
}

scope();
 // cannot be used in an alert