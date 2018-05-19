

function sum(a,b){
    return a + b;
}

// or

let sumAnonymous = function(a,b){
    return a + b;
}

let sumArrow = (a,b) => a+b;

//console.log(sum(1,2), 'sum');
//console.log(sumAnonymous(1,2), 'sumAnonymous');
//console.log(sumArrow(1,2), 'sumArrow');

/***** */

var animals = [
    "Dog",
    "Cat",
    "Horse",
    "Lion",
    "Puma"
];

var animalsList = animals.map(function(name) {
    return name.length;   
});

var animalsListArrow = animals.map(name => name.length);

//console.log(animalsList, 'animalsList');
//console.log(animalsListArrow, 'animalsListArrow');


/******************************* */

var numbers = [2,6,8,1,4];
var sum = 0;

numbers.forEach(function(number){
    return sum += number;
});
console.log(sum, 'sum');

var sum = 0;
numbers.forEach((number) => sum += number );
console.log(sum, 'sumArrow');
