/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedRice: number = 18000;
const FrQuantity: number = 3;

const mineralWater: number = 5000;
const mineralQuantity: number = 2;

const discount: number = 10000;

const totalFood: number = friedRice*FrQuantity;
const totalDrink: number = mineralWater*mineralQuantity;
const grandTotal: number = totalFood+totalDrink;
const finalPayment: number = grandTotal-discount;

console.log ("Total food price:", totalFood);
console.log ("Total drink price:", totalDrink);
console.log ("Grand total:", grandTotal);
console.log ("Final payment:", finalPayment);
