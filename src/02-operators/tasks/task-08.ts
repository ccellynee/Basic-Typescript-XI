/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */
const previousMeter: number = 25640;
const currentMeter: number = 25892;
const electricityPricePerKWh: number = 1650;
const solarPanelInstalled: boolean = true;
const energySavingMode: boolean = false;

const totalEnergyConsumption: number = currentMeter - previousMeter;
const electricityBill: number = totalEnergyConsumption * electricityPricePerKWh;

let discount: number = 0;
if (solarPanelInstalled) {
    discount += electricityBill * 0.20;
}
if (energySavingMode) {
    discount += electricityBill * 0.05;
}

const finalBill: number = electricityBill - discount;

let greenEnergyProgram: boolean = false;

if (
    solarPanelInstalled &&
    totalEnergyConsumption < 300 &&
    energySavingMode
) {
    greenEnergyProgram = true;
}

console.log("Total Energy Consumption: " + totalEnergyConsumption + " kWh");
console.log("Electricity Bill: " + electricityBill);
console.log("Final Bill: " + finalBill);
console.log("Green Energy Program: " + greenEnergyProgram);