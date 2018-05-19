

console.log(-0 === 0);
console.log(Object.is(-0,0));

console.log(Object.is(1,1));
console.log(Object.is(1,"1"));

console.log(Object.is("foo","foo"));
console.log(Object.is("f","foo"));

console.log(NaN === NaN);
console.log(Object.is(NaN,NaN));


/****************** */


let obj1 = { a: 1 };
let obj2 = { b: 1 };
let obj3 = { c: 1 };

console.log(Object.assign(obj1));
console.log(Object.assign({}, obj1));


console.log(Object.assign(obj1, obj2));
console.log(obj1);

console.log(obj2);
console.log(Object.assign({}, obj1, obj2));


console.log(Object.assign(obj1, obj2, obj3));
console.log(obj1);

console.log(obj2);
console.log(obj3);
console.log(Object.assign({}, obj1, obj2, obj3));


/********************* */

// es5
function buildObjectES5(propName, propValue){
    let obj = {};
    obj[propName] = propValue;
    return obj;
}

// es6
function buildObjectES6(propName, propValue){
    return {
        [propName]: propValue
    };
}

let name = 'Sohrab';
let family = 'Nazari';
let person = { name, family };

console.log(person);
console.log(buildObjectES5('name', 'Sohrab'));
console.log(buildObjectES6('name', 'Sohrab'));
