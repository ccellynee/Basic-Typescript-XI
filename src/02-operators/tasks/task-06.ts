/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const hours: number = 7;
const minutes: number = 35;

const hourlyRate: number = 8000;

const totalMinutes: number = (hours * 60) + minutes;

const remainingMinutes: number = totalMinutes % 60;

const billedHours: number = remainingMinutes > 0 ? hours + 1 : hours;

const totalPayment: number = billedHours * hourlyRate;

const discount: number = billedHours > 5 ? totalPayment * 0.15 : 0;

const finalPayment: number = totalPayment - discount;

console.log("Total Playing Time (minutes):", totalMinutes);
console.log("Remaining Minutes:", remainingMinutes);
console.log("Total Billed Hours:", billedHours);
console.log("Payment Before Discount: Rp", totalPayment);
console.log("Discount: Rp", discount);
console.log("Final Payment: Rp", finalPayment);