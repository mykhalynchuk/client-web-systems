interface Shape {
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
}

class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    scale(factor: number): void {
        this.radius *= factor;
    }
}

class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    scale(factor: number): void {
        this.width *= factor;
        this.height *= factor;
    }
}

class Triangle implements Shape {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea(): number {
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }

    getPerimeter(): number {
        return this.a + this.b + this.c;
    }

    scale(factor: number): void {
        this.a *= factor;
        this.b *= factor;
        this.c *= factor;
    }
}

console.log("--- Обчислення для геометричних фігур ---");

const shapesArray: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
];

let totalArea = 0;
let totalPerimeter = 0;

console.log("До масштабування:");
shapesArray.forEach((shape, index) => {
    const area = shape.getArea();
    const perimeter = shape.getPerimeter();

    totalArea += area;
    totalPerimeter += perimeter;

    console.log(`Фігура ${index + 1}: Площа = ${area.toFixed(2)}, Периметр = ${perimeter.toFixed(2)}`);
});

console.log(`\nЗАГАЛЬНА ПЛОЩА: ${totalArea.toFixed(2)}`);
console.log(`ЗАГАЛЬНИЙ ПЕРИМЕТР: ${totalPerimeter.toFixed(2)}\n`);

console.log("Масштабуємо всі фігури у 2 рази (x2)...");
shapesArray.forEach(shape => shape.scale(2));

let newTotalArea = 0;
let newTotalPerimeter = 0;

shapesArray.forEach(shape => {
    newTotalArea += shape.getArea();
    newTotalPerimeter += shape.getPerimeter();
});

console.log(`НОВА ЗАГАЛЬНА ПЛОЩА: ${newTotalArea.toFixed(2)}`);
console.log(`НОВИЙ ЗАГАЛЬНИЙ ПЕРИМЕТР: ${newTotalPerimeter.toFixed(2)}`);