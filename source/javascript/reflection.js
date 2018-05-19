
let person = {    
    name: 'Sohrab',
    family: 'Nazari',
    dowork: function(){}
}


for(let property of Reflect.enumerate(person)){
    console.log(`The value for ${property} is ${person[property]}`);
}


Reflect.set(person, 'age', 23);
console.log(Reflect.get(person, 'age'));

console.log(person);

Reflect.deleteProperty(person, 'dowork');

console.log(Reflect.has(person, 'dowork'));
console.log(Reflect.has(person, 'age'));

console.log(person);
