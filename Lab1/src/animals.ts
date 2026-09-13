interface IAnimal {
    name: string;
    species: string;
    move(): string;
    wingSpan?: number;
    swimDepth?: number;
    sound?: string;
}

class Cat implements IAnimal {
    name: string;
    species: string = "Кіт";
    sound: string = "Мур-мур";

    constructor(name: string) {
        this.name = name;
    }

    move(): string {
        return `${this.name} граціозно ходить та бігає на чотирьох лапах.`;
    }
}

class Bird implements IAnimal {
    name: string;
    species: string = "Птах";
    wingSpan: number;

    constructor(name: string, wingSpan: number) {
        this.name = name;
        this.wingSpan = wingSpan;
    }

    move(): string {
        return `${this.name} літає в повітрі з розмахом крил ${this.wingSpan} см.`;
    }
}

class Fish implements IAnimal {
    name: string;
    species: string = "Риба";
    swimDepth: number;

    constructor(name: string, swimDepth: number) {
        this.name = name;
        this.swimDepth = swimDepth;
    }

    move(): string {
        return `${this.name} плаває у воді на глибині ${this.swimDepth} метрів.`;
    }
}

console.log("--- Перевірка тварин ---");

const myCat = new Cat("Барсик");
const myBird = new Bird("Кеша", 30);
const myFish = new Fish("Немо", 5);

console.log(myCat.move(), `| Голос: ${myCat.sound}`);
console.log(myBird.move());
console.log(myFish.move());