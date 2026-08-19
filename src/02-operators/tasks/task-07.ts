/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

let roomPricePerNight: number = 650000;
let nightsStayed: number = 4;
let serviceCharge: number = 120000;
let taxRate: number = 0.11;
let isVIPMember: boolean = true;

let roomSubtotal: number = roomPricePerNight * nightsStayed;
let discount: number = 0;

if (isVIPMember) {
    discount = roomSubtotal * 0.12;
}
let tax: number = (roomSubtotal - discount) * taxRate;
let finalPayment: number = (roomSubtotal - discount) + tax + serviceCharge;
let freeBreakfast: boolean = false;

if (nightsStayed >= 3 || isVIPMember) {
    freeBreakfast = true;
}

console.log("Room Subtotal: " + roomSubtotal);
console.log("Discount: " + discount);
console.log("Tax: " + tax);
console.log("Final Payment: " + finalPayment);
console.log("Free Breakfast: " + freeBreakfast);