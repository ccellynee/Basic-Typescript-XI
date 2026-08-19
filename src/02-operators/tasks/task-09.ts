/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const mechanicalKeyboardPrice: number = 850000;
const mechanicalKeyboardQty: number = 1;

const wirelessMousePrice: number = 275000;
const wirelessMouseQty: number = 2;

const monitorStandPrice: number = 420000;
const monitorStandQty: number = 1;

const voucherValue: number = 100000;
const premiumMember: boolean = true;
const rewardPointRate: number = 50000;
const vatRate: number = 0.11;

const productSubtotal: number =
    (mechanicalKeyboardPrice * mechanicalKeyboardQty) +
    (wirelessMousePrice * wirelessMouseQty) +
    (monitorStandPrice * monitorStandQty);

let membershipDiscount: number = 0;
if (premiumMember) {
    membershipDiscount = productSubtotal * 0.10;
}

const voucherDeduction: number = voucherValue;

const paymentBeforeTax: number =
    productSubtotal - membershipDiscount - voucherDeduction;

const vat: number = paymentBeforeTax * vatRate;
const finalPayment: number = paymentBeforeTax + vat;
const rewardPoints: number = Math.floor(paymentBeforeTax / rewardPointRate);
let freeShipping: boolean = false;

if (premiumMember || paymentBeforeTax > 1500000) {
    freeShipping = true;
}

console.log("Product Subtotal: " + productSubtotal);
console.log("Membership Discount: " + membershipDiscount); 
console.log("Voucher Deduction: " + voucherDeduction);
console.log("Payment Before Tax: " + paymentBeforeTax);
console.log("VAT: " + vat);
console.log("Final Payment: " + finalPayment);
console.log("Reward Points: " + rewardPoints);
console.log("Free Shipping: " + freeShipping);