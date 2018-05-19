
// multiline string

//es5
console.log('string text line 1 \n' + 
'string text line 2');

//es6
console.log(`string text line 1
string text line 2`);

/************************ using variable */


var a = 5;
var b = 9;

//es5
console.log('fifteen ' + (a+b) + ' and\nnot ' + (2*a+b) + '.');

//es6
console.log(`fifteen ${ a+b } and\nnot ${ 2*a+b }.`);

/******************* passing value */


function tag(strings, ...values){
    console.log(strings[0]);
    console.log(strings[1]);
    console.log(values[0]);
    console.log(values[1]);
    console.log("done");
}

tag`hello${ a+b }world${ a*b }`