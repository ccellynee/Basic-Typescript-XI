/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type product = {
    productCode: string;
    productName: string;
    sellingPrice: number;
    stockQuantity: number;
    productWeight: number;
    averageRating: number;
    isDiscounted: boolean;
}

const product1: product = {
    productCode: "FD001",
    productName: "Chocolate Cookies",
    sellingPrice: 25000,
    stockQuantity: 50,
    productWeight: 0.2,
    averageRating: 4.8,
    isDiscounted: true,
};

const product2: product = {
    productCode: "FD002",
    productName: "Spicy Chicken Burger",
    sellingPrice: 35000,
    stockQuantity: 30,
    productWeight: 0.3,
    averageRating: 4.7,
    isDiscounted: false,
};

const product3: product = {
    productCode: "FD003",
    productName: "Strawberry Milk",
    sellingPrice: 18000,
    stockQuantity: 45,
    productWeight: 0.25,
    averageRating: 4.9,
    isDiscounted: true,
};

console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);