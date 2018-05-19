
/*

function* generator(){
    yield 1;
    yield 2;
    yield 3;
    
    if(true){
        return 3;
    }
    
    yield 4;
    yield 5;
    yield 'done?'
}

for(let generate of generator()){
    console.log(generate);
}

*/


/*********** */


function* random1_20(max){
    while(true){
        yield Math.ceil(Math.random() * max);
    }
}


function* randomMax(max){
    while(true){
        yield* random1_20(max);
    }
}



let generate = random1_20();
console.log(generate.next());
console.log(generate.next());
console.log(generate.return());
console.log(generate.next());


