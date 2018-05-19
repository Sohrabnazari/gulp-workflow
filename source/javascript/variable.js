

function varIf(){
    var x = 20;
    if(true){
        var x = 83;
        console.log(x, 'var x inside if');
    }
    console.log(x, 'var x outside if');
}

function letIf(){
    let x = 20;
    if(true){
        let x = 83;
        console.log(x, 'let x inside if');
    }
    console.log(x, 'let x outside if');
}

/*
varIf();
letIf();
*/

/********************** */

function varFor(){
    for(var i=0; i<10; i++){
        console.log(i, 'var i inside for');
    }
    console.log(i, 'var i outside for');
}

function letFor(){
    for(let i=0; i<10; i++){
        console.log(i, 'let i inside for');
    }
    console.log(i, 'let i outside for'); // i is undefined
}

/*
varFor();
letFor();
*/

//************************ */

var a = 5;
var b = 19;
const C = 22;

if(a === 5){

    let a = 4;
    var b = 1;
    const C = 22; // can define by let but var give error

    console.log(a, 'let a inside block');
    console.log(b, 'var b inside block');
    console.log(C, 'const C inside block');
}

console.log(a, 'var a outside block');
console.log(b, 'var b outside block');

