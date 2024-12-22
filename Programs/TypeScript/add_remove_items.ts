class DataStore<T> {
    private items: T[] = [];

    // Add an item to the store
    addItem(item: T): void {
        if (!this.items.includes(item)) {
            this.items.push(item);
        } else {
            console.warn("Item already exists in the store.");
        }
    }

    // Add multiple items to the store (bulk addition)
    addItems(items: T[]): void {
        items.forEach(item => this.addItem(item));
    }

    // Remove an item from the store
    removeItem(item: T): void {

        //In ES2015, this is pretty easy:
        //myArray.map(x => x.hello).indexOf('stevie')
        //or, probably with better performance for larger arrays:
        //myArray.findIndex(x => x.hello === 'stevie')

        const index = this.items.findIndex(x => x.name === item.name);
        if (index > -1) {
            this.items.splice(index, 1);
        } else {
            console.warn("Item not found in the store.");
        }
    }

    // Remove multiple items (bulk removal)
    removeItems(items: T[]): void {
        items.forEach(item => this.removeItem(item));
    }

    // Get all items from the store
    getItems(): T[] {
        return [...this.items]; // Returning a copy for immutability
    }

    // Find an item by a specific property using a predicate
    findItems(predicate: (item: T) => boolean): T[] {
        return this.items.filter(predicate);
    }

    // Clear all items in the store
    clear(): void {
        this.items = [];
    }
}


interface Item {
    id: number;
    name: string;
}

const objectStore = new DataStore<Item>();

// Adding items
objectStore.addItem({ id: 1, name: "Item 1" });
objectStore.addItems([{ id: 2, name: "Item 2" }, { id: 3, name: "Item 3" }]);

console.log(objectStore.getItems()); 
// Output: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }, { id: 3, name: "Item 3" }]

// Finding items
const foundItems = objectStore.findItems(item => item.name.includes("Item 1"));
console.log(foundItems);
// Output: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }, { id: 3, name: "Item 3" }]

// Removing items
objectStore.removeItem({ id: 2, name: "Item 2" }); // Warning: Objects must match reference
objectStore.removeItems([{ id: 1, name: "Item 1" }]); // Also requires reference

console.log(objectStore.getItems());
// Clearing the store
objectStore.clear();
console.log(objectStore.getItems()); // Output: []