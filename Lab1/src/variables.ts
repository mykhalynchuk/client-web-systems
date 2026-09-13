const firstName: string = "Олена";

let age: number = 19;

let isStudent: boolean = true;

let mystery: any = "спочатку рядок";

console.log("Примітивні типи:");
console.log("firstName (string):", firstName, "| typeof =", typeof firstName);
console.log("age (number):", age, "| typeof =", typeof age);
console.log("isStudent (boolean):", isStudent, "| typeof =", typeof isStudent);
console.log("mystery (any):", mystery, "| typeof =", typeof mystery);

mystery = 42;
console.log("mystery після переприсвоєння:", mystery, "| typeof =", typeof mystery);
mystery = false;
console.log("mystery ще раз:", mystery, "| typeof =", typeof mystery);

age = 20;
isStudent = false;
console.log("Оновлені значення:", { age, isStudent });

const city = "Чернівці";
console.log("\nВиведення типів:");
console.log("city автоматично отримав тип string:", city);


const subjects: string[] = ["Клієнтські вебсистеми", "Бази даних", "Алгоритми"];
const grades: number[] = [95, 88, 74, 100];
const flags: Array<boolean> = [true, false, true];

console.log("\nМасиви:");
console.log("subjects (string[]):", subjects);
console.log("grades (number[]):", grades);
console.log("flags (Array<boolean>):", flags);

const total: number = grades.reduce((sum: number, mark: number) => sum + mark, 0);
const average: number = total / grades.length;
console.log(`Сума оцінок: ${total}, середній бал: ${average.toFixed(2)}`);

const studentRecord: [string, number, boolean] = ["Олена", 19, true];
console.log("\nКортеж: ");
console.log("studentRecord [string, number, boolean]:", studentRecord);

type Id = string | number;

const groupId: Id = 321;
const studentId: Id = "CS-2026-14";
console.log("\nUnion-тип:");
console.log("groupId:", groupId, "| studentId:", studentId);

export { firstName, subjects, grades };