
class Point {
    
    constructor(x=1, y=1){
        this.x = x;
        this.y = y;
    }

    toString(){
        return `Point: (${this.x}, ${this.y})`;
    }

}
     
let p1 = new Point(25, 8);
console.log(p1.toString());

let p2 = new Point(20, 18);
console.log(p2.toString());



