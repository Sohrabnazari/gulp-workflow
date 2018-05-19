

// default parameter

function multiply(a=1, b=3){
    return a * b;
}

console.log(multiply());

/****************** */

// es5

function sum5(){
    var numbers = Array.prototype.slice.call(arguments);
    var result = 0;
    numbers.forEach(function(number){
        result += number;
    });
    return result;
}

console.log(sum5(2,5));
console.log(sum5(9,8,4,2,3));

// rest parameter - es6

// you can pass parameters before rest parameter but after rest parameter you can't pass parameters

function sum6(test, ...numbers){
    var result = 0;
    numbers.forEach(function(number){
        result += number;
    });
    return result;
}

console.log(sum6(true, 2,5));
console.log(sum6(true, 9,8,4,2,3));


/****************** */

// spread

var parts = ['two', 'three'];
var array = ['one', ...parts, 'four'];

console.log(array);

/********** */

function sum(a, b, c){
    return a + b + c;
}

var args = [1,2,3];

console.log(sum(...args));

