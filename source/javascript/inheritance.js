

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

class ColorPoint extends Point {


    // override
    constructor(x=1, y=1, color='black'){
        super(x,y);
        this.color = color;
    }


    // override
    toString(){
      //  return `Point: (${this.x}, ${this.y}), Color: ${this.color}`;
        return `Point: (${super.toString()}), Color: ${this.color}`;
    }

}
     

let p1 = new Point(20, 18);
console.log(p1.toString());

let p2 = new Point();
p2.Point = [5,6];
console.log(p2.Point);

let cp = new ColorPoint(25, 8, 'red');
console.log(cp.toString());

