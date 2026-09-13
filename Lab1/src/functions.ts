function repeatMessage(message: string, times: number = 1): string {
    const result: string[] = [];

    for (let i = 1; i <= times; i++) {
        result.push(`${i}. ${message}`);
    }

    return result.join("\n");
}

console.log("Параметр за замовчуванням: ");
console.log(repeatMessage("Привіт, TypeScript!"));
console.log(repeatMessage("Повторюю тричі", 3));

function buildFullName(firstName: string, lastName?: string): string {
    if (lastName === undefined) {
        return firstName;
    }
    return `${firstName} ${lastName}`;
}

console.log("\nОпціональний параметр: ");
console.log(buildFullName("Олена"));
console.log(buildFullName("Олена", "Коваленко"));

function logSeparator(title: string): void {
    console.log(`\n${title}`);
}

logSeparator("void-функція");
console.log("logSeparator нічого не повертає, вона лише виконує дію");


type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;          // типи a і b виводяться з MathOperation
const multiply: MathOperation = (a, b) => a * b;

logSeparator("Стрілкові функції та тип функції");
console.log("add(4, 6) =", add(4, 6));
console.log("multiply(4, 6) =", multiply(4, 6));

function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, n) => acc + n, 0);
}

logSeparator("Rest-параметри");
console.log("sumAll(1, 2, 3, 4, 5) =", sumAll(1, 2, 3, 4, 5));

function describeValue(value: string | number): string {
    if (typeof value === "string") {

        return `Рядок довжиною ${value.length} символів`;
    }
    return `Число, помножене на 2 = ${value * 2}`;
}

logSeparator("Звуження типу");
console.log(describeValue("TypeScript"));
console.log(describeValue(21));

export { repeatMessage, buildFullName, add, multiply, sumAll, describeValue };