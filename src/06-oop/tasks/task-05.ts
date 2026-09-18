/**
 * An e-commerce company wants to manage product inventory.
 * Each product has:
 * - Product ID
 * - Product name
 * - Price
 * - Stock quantity
 * For example:
 * Product
 * - ID: PRD001
 * - Name: Gaming Laptop
 * - Price: Rp15,000,000
 * - Stock: 20
 * The company wants to make sure product data cannot be changed carelessly.
 * 
 * The system needs to support:
 * - Increasing stock
 * - Decreasing stock
 * - Changing price
 * - Checking stock availability
 * - Calculating inventory value
 * 
 * Student Tasks
 * - Create class Product
 * - Private Properties, at minimum:
 *   * private price: number;
 *   * private stock: number;
 * 
 * - Other properties can be public or private depending on the student's design.
 * - Required Methods
 *   * addStock(quantity)
 *   * removeStock(quantity)
 *   * changePrice(newPrice)
 *   * isAvailable()
 *   * getInventoryValue()
 *   * showProductInfo()
 * 
 * - Business Rules
 * addStock(): quantity must be greater than 0.
 * removeStock(): quantity must be greater than 0 and not greater than current stock
 * changePrice(): new price must be greater than 0.
 * isAvailable(): returns true when stock > 0, otherwise false
 * getInventoryValue(): calculate price × stock
 */

class Product {
    constructor(
        public id: string,
        public name: string,
        private price: number,
        private stock: number
    ) {}

    addStock(quantity: number): void {
        if (quantity > 0) {
            this.stock += quantity;
            console.log(`Stock berhasil ditambahkan. Stock sekarang: ${this.stock}`);
        } else {
            console.log("Quantity harus lebih dari 0.");
        }
    }

    removeStock(quantity: number): void {
        if (quantity > 0 && quantity <= this.stock) {
            this.stock -= quantity;
            console.log(`Stock berhasil dikurangi. Stock sekarang: ${this.stock}`);
        } else {
            console.log("Quantity tidak valid atau melebihi stock.");
        }
    }

    changePrice(newPrice: number): void {
        if (newPrice > 0) {
            this.price = newPrice;
            console.log(`Harga berhasil diubah menjadi Rp${this.price}`);
        } else {
            console.log("Harga harus lebih dari 0.");
        }
    }

    isAvailable(): boolean {
        return this.stock > 0;
    }

    getInventoryValue(): number {
        return this.price * this.stock;
    }

    showProductInfo(): void {
        console.log(`Product ID: ${this.id}`);
        console.log(`Product Name: ${this.name}`);
        console.log(`Price: Rp${this.price}`);
        console.log(`Stock: ${this.stock}`);
    }
}

const laptop = new Product(
    "PRD001",
    "Gaming Laptop",
    15000000,
    20
);

laptop.addStock(5);

laptop.removeStock(3);

laptop.changePrice(14500000);

laptop.showProductInfo();

console.log(laptop.isAvailable());

console.log(laptop.getInventoryValue());