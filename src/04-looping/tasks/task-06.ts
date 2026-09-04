/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let out = 0;
let low = 0;
let safe = 0;
let totalInventory = 0;

for (let i = 0; i < stocks.length; i++) {
    totalInventory += stocks[i];

    if (stocks[i] === 0) {
        out++;
    } else if (stocks[i] < 10) {
        low++;
    } else {
        safe++;
    }
}

const average = totalInventory / stocks.length;

console.log ("Out of Stock products:", out);
console.log ("Low Stock products:", low);
console.log ("Safe Stock products:", safe);
console.log ("Total inventory", totalInventory);
console.log ("Average stock quantity:", average);