interface LibraryItem {
    name: string;
    author: string;
    isBorrowed: boolean;
    borrow(): void;
}

class Book implements LibraryItem {
    isBorrowed: boolean = false;

    constructor(
        public name: string,
        public author: string,
        public pages: number
    ) {}

    borrow(): void {
        this.isBorrowed = true;
    }
}

class Magazine implements LibraryItem {
    isBorrowed: boolean = false;

    constructor(
        public name: string,
        public author: string,
        public issueNumber: number
    ) {}

    borrow(): void {
        this.isBorrowed = true;
    }
}

class DVD implements LibraryItem {
    isBorrowed: boolean = false;

    constructor(
        public name: string,
        public author: string,
        public duration: number
    ) {}

    borrow(): void {
        this.isBorrowed = true;
    }
}

class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.name === name);
    }

    printAvailableItems(): void {
        const availableItems = this.items.filter(item => !item.isBorrowed);

        console.log("Доступні елементи в бібліотеці:");
        availableItems.forEach(item => {
            console.log(`- ${item.name} (${item.author})`);
        });
    }
}

const myLibrary = new Library();

const book = new Book("Clean Code", "Robert C. Martin", 464);
const magazine = new Magazine("Tech Today", "Tech Press", 12);
const dvd = new DVD("TypeScript Masterclass", "John Smith", 180);

myLibrary.addItem(book);
myLibrary.addItem(magazine);
myLibrary.addItem(dvd);

myLibrary.printAvailableItems();

const itemToBorrow = myLibrary.findItemByName("Tech Today");
if (itemToBorrow) {
    itemToBorrow.borrow();
    console.log(`\nЕлемент "${itemToBorrow.name}" було позичено\n`);
}

myLibrary.printAvailableItems();