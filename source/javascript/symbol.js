
console.log(typeof "String");
console.log(typeof 123);
console.log(typeof Object());
console.log(typeof Symbol());


class MakeIterator {

    constructor(array){
        this.arr = array
    }

    [Symbol.iterator](){

        let nextIndex = 0;

        return {
            next: () => {
                return nextIndex < this.arr.length ? { value: this.arr[nextIndex++], done: false } : { done: true };
            }
        }
    }
}

let array = new MakeIterator([1,2,3,4,5]);
for(let arr of array){
    console.log(arr);
}
