
// array destructuring

var foo = ['one', 'two', 'three'];

// es5
var one = foo[0];
var two = foo[1];
var three = foo[2];

// es6
var [one, two, three] = foo;


/********************** */

var a,b;

// es5
var array = [1,2];
a = array[0];
b = array[1];

// es6
[a,b] = [1,2];

// or 

function f(){
    return [4,1,2,3];
}

[,a,b,] = f();

console.log(a);
console.log(b);


/*************************** */

// object destructuring

var object = { p:42, q:true, b:[1,2,3,4]};

// es5

var p = object.p;
var q = object.q;

// es6

var {p,q} = object;
console.log(p,q);
// or

var {p:foo,q:bar,b:[,,f,]} = object;
console.log(foo,bar,f);



