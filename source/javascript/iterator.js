
let sum;
let numbers = [1,9,5,4];

sum = 0;
for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);

// or using for in

sum = 0;
for(let i in numbers){
    sum += numbers[i];
}
console.log(sum);


/** for of es6 */

sum = 0;
for(let value of numbers){
    sum += value;
}
console.log(sum);


/** iterator es6*/

let iterator = numbers.values();
let next = iterator.next();

console.log(iterator);
console.log(next);

sum = 0;
while(!next.done){
    sum += next.value;
    next = iterator.next();
}
console.log(sum);
