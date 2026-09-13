const sizePrices: Record<string, number> = {
    "маленький": 10,
    "великий": 25
};

const toppingPrices: Record<string, number> = {
    "шоколад": 5,
    "карамель": 6,
    "ягоди": 10
};

const MARSHMALLOW_PRICE: number = 5;

function calculateIceCreamCost(size: string, toppings: string[], hasMarshmallow: boolean): number {
    let totalCost: number = 0;

    if (sizePrices[size]) {
        totalCost += sizePrices[size];
    } else {
        throw new Error("Невідомий розмір морозива! Виберіть 'маленький' або 'великий'.");
    }

    if (toppings.length === 0 || toppings[0] === "") {
        throw new Error("Потрібно обрати мінімум одну начинку!");
    }

    toppings.forEach(topping => {
        if (toppingPrices[topping]) {
            totalCost += toppingPrices[topping];
        } else {
            throw new Error(`Невідома начинка: '${topping}'. Доступні: шоколад, карамель, ягоди.`);
        }
    });

    if (hasMarshmallow) {
        totalCost += MARSHMALLOW_PRICE;
    }

    return totalCost;
}

function createOrder(): void {
    try {
        const sizeInput: string = prompt("Оберіть розмір (маленький / великий):")?.trim().toLowerCase() || "";

        const toppingsInput: string = prompt("Введіть начинки через кому (шоколад, карамель, ягоди):")?.toLowerCase() || "";

        const toppingsArray: string[] = toppingsInput.split(',').map(t => t.trim()).filter(t => t !== "");

        const marshmallowInput: string = prompt("Додати маршмелоу? (так / ні):")?.trim().toLowerCase() || "ні";
        const hasMarshmallow: boolean = marshmallowInput === "так";

        const finalPrice = calculateIceCreamCost(sizeInput, toppingsArray, hasMarshmallow);

        alert(`Замовлення прийнято! Вартість вашого морозива: ${finalPrice} грн.`);
        console.log(`Вартість морозива: ${finalPrice} грн.`);

    } catch (error: any) {
        alert(`Помилка: ${error.message}`);
        console.error(error.message);
    }
}

createOrder();