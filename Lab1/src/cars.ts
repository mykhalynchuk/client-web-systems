abstract class Car {
    protected brand: string;
    public year: number;
    private vinCode: string;

    constructor(brand: string, year: number, vinCode: string) {
        this.brand = brand;
        this.year = year;
        this.vinCode = vinCode;
    }

    protected getVinCode(): string {
        return this.vinCode;
    }

    abstract getCarDescription(): void;
}

class Toyota extends Car {
    public model: string;
    private isHybrid: boolean;

    constructor(model: string, year: number, vinCode: string, isHybrid: boolean) {
        super("Toyota", year, vinCode);
        this.model = model;
        this.isHybrid = isHybrid;
    }

    getCarDescription(): void {
        const engineType = this.isHybrid ? "Гібридний двигун" : "Звичайний двигун";
        console.log(`[${this.brand}] Модель: ${this.model} | Рік: ${this.year} | Тип: ${engineType} | VIN: ${this.getVinCode()}`);
    }
}

class BMW extends Car {
    public model: string;
    private hasMPackage: boolean;

    constructor(model: string, year: number, vinCode: string, hasMPackage: boolean) {
        super("BMW", year, vinCode);
        this.model = model;
        this.hasMPackage = hasMPackage;
    }

    getCarDescription(): void {
        const packageInfo = this.hasMPackage ? "Встановлено M Performance" : "Базова комплектація";
        console.log(`[${this.brand}] Модель: ${this.model} | Рік: ${this.year} | Пакет: ${packageInfo} | VIN: ${this.getVinCode()}`);
    }
}

class Tesla extends Car {
    public model: string;
    private batteryCapacity: number;

    constructor(model: string, year: number, vinCode: string, batteryCapacity: number) {
        super("Tesla", year, vinCode);
        this.model = model;
        this.batteryCapacity = batteryCapacity;
    }

    getCarDescription(): void {
        console.log(`[${this.brand}] Модель: ${this.model} | Рік: ${this.year} | Батарея: ${this.batteryCapacity} кВт-год | VIN: ${this.getVinCode()}`);
    }
}

console.log("--- Опис автомобілів ---\n");

const toyota1 = new Toyota("Camry", 2023, "JT111111111111111", true);
const toyota2 = new Toyota("Land Cruiser Prado", 2021, "JT222222222222222", false);
toyota1.getCarDescription();
toyota2.getCarDescription();

const bmw1 = new BMW("M3 Competition", 2024, "WBA33333333333333", true);
const bmw2 = new BMW("X5", 2019, "WBA44444444444444", false);
bmw1.getCarDescription();
bmw2.getCarDescription();


const tesla1 = new Tesla("Model S Plaid", 2024, "5YJ55555555555555", 100);
const tesla2 = new Tesla("Model 3", 2022, "5YJ66666666666666", 75);
tesla1.getCarDescription();
tesla2.getCarDescription();