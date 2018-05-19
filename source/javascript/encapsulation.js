
class Point {
    
    constructor(x=1, y=1){
        this.x = x;
        this.y = y;
    }

    toString(){
        return `Point: (${this.x}, ${this.y})`;
    }

    // getter 
    get Point(){
        return `Point: (${this.x}, ${this.y})`;
    }

    // setter 
    set Point(value){
        this.x = value[0];
        this.y = value[1];
    }
}
     
let p1 = new Point(25, 8);
console.log(p1.toString());

let p2 = new Point(20, 18);
console.log(p2.toString());


let p3 = new Point();
p3.Point = [5,6];
console.log(p2.Point);
