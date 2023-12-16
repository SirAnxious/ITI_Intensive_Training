class Shape {
    constructor() {
        if (this.constructor.name == 'Shape')
            throw "Cannot create object of type Shape!";
    }
}

class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
        super();
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return 2 * (this.length + this.width);
    }

    toString() {
        return `Rectangle Area: ${this.getArea()} | Rectangle Perimeter: ${this.getPerimeter()}`;
    }

    draw() {
        ourDiv.innerHTML = "";
        ourDiv.innerHTML += `<h1>Rectangle</h1>`;
        ourDiv.innerHTML += `<div class="rectangle"></div>`;
        ourDiv.innerHTML += `<b>${this.toString()}</b>`;
    }
}

class Square extends Rectangle {
    constructor(length = 0) {
        super();
        this.length = length;
    }
    getArea() {
        return this.length * this.length;
    }

    getPerimeter() {
        return 4 * this.length;
    }

    toString() {
        return `Square Area: ${this.getArea()} | Square Perimeter: ${this.getPerimeter()}`;
    }

    draw() {
        ourDiv.innerHTML = "";
        ourDiv.innerHTML += `<h1>Square</h1>`;
        ourDiv.innerHTML += `<div class="square"></div>`;
        ourDiv.innerHTML += `<b>${this.toString()}</b>`;
    }
}

class Triangle extends Shape {
    constructor(a = 0, b = 0, c = 0) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // using Heron's Formula
    getArea() {
        var p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }

    // getPerimeter() {
    //     return a+b+c;
    // }

    toString() {
        return `Triangle Area: ${this.getArea()}`;
    }

    draw() {
        ourDiv.innerHTML = "";
        ourDiv.innerHTML += `<h1>Triangle</h1>`;
        ourDiv.innerHTML += `<div class="triangle"></div>`;
        ourDiv.innerHTML += `<b>${this.toString()}</b>`;
    }
}

class Circle extends Shape {
    constructor(radius = 0) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircum() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `Circle Area: ${this.getArea()} | Circle Circumference: ${this.getCircum()}`;
    }

    draw() {
        ourDiv.innerHTML = "";
        ourDiv.innerHTML += `<h1>Circle</h1>`;
        ourDiv.innerHTML += `<div class="circle"></div>`;
        ourDiv.innerHTML += `<b>${this.toString()}</b>`;
    }
}

// var shape = new Shape(); // throws an error
var rectangle = new Rectangle(6, 6);
// console.log(rectangle.getPerimeter()); // 24
// console.log(rectangle.getArea()); // 36
console.log(rectangle.toString());


var square = new Square(5);
// console.log(square.getPerimeter()); // 20
// console.log(square.getArea()); // 25
console.log(square.toString());

var circle = new Circle(10);
// console.log(circle.getArea());
// console.log(circle.getCircum());
console.log(circle.toString());

var triangle = new Triangle(24, 30, 18);
console.log(triangle.toString());

ourDiv = document.getElementById("drawArea");