function greetUser(name: string, greetingCount: number = 1): void {
    console.log(`\nГенерація привітань для користувача ${name} (${greetingCount} разів):`);

    for (let i = 0; i < greetingCount; i++) {
        console.log(`${i + 1}. Привіт, ${name}!`);
    }
}

greetUser("Студент", 3);

greetUser("Гість");