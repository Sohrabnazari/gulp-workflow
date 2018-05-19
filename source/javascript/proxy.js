
let Person = {
    name: 'Sohrab',
    family: 'Nazari',
    age: 23,
    number: function(i){
        return i;
    }
}


let Person2 = {
    name: 'Sohra'
}


let proxyPerson = new Proxy(Person, {
    
    get(target, property){
        
        if(property === 'age'){
            return `age is ${ target[property] }`;
        } else {
            return target[property];
        }
    },

    set(target, property, value){

        if(property === 'age'){
            target[property] = value;
            console.log(`age is change to ${ target[property] }`);
            return target[property];
        } else {
            console.log(`You can't change the ${ property } value!`);
            return true;
        }
    },
});


Person.number = new Proxy(Person.number, {
    
    apply(target, context, args){

        if(context !== Person){
            return `nobody can use Person`;
        } else {
            return target.apply(context, args);
        }
    }
});



console.log(proxyPerson.name);
console.log(proxyPerson.family);
console.log(proxyPerson.age);


proxyPerson.age = 22;
proxyPerson.name = 'Sohra';
console.log(proxyPerson);


Person2.number = Person.number;
console.log(Person.number(22));
console.log(Person2.number(22));

