/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [125000, 350000, 78000, 910000, 150000, 420000, 275000, 99000, 640000, 18000]
let totalSales: number = 0;
let highest = sales[0];
let lowest = sales[0];
let transactions300 = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];

    if (sales[i] > highest) {
        highest = sales[i];
    }
    if (sales[i] < lowest) {
        lowest = sales[i];
    }

    if (sales[i] >= 300000) {
        transactions300 ++;
    }
}

const average = totalSales / sales.length;

console.log ("Total sales:", totalSales);
console.log ("Highest transactions:", highest);
console.log ("Lowest transactions:", lowest);
console.log ("Transactions >= 300000:", transactions300);
console.log ("Average transactions:", average);