/**
 * An e-commerce company supports several shipping services.
 * Every shipment contains:
 * - Tracking number
 * - Destination
 * - Package weight
 * 
 * However, each shipping service calculates its shipping cost differently.
 * - Regular Shipping: 10000 / kg
 * - Express Shipping: 20000 / kg
 * - Same-day Shipping: 30000 / kg
 * 
 * Example shipments:
 * ---------------------
 * Tracking: REG001
 * Destination: Malang
 * Weight: 3 kg
 * ---------------------
 * Tracking: EXP001
 * Destination: Surabaya
 * Weight: 2 kg
 * ---------------------
 * Tracking: SMD001
 * Destination: Jakarta
 * Weight: 4 kg
 * ---------------------
 * 
 * Tasks:
 * - Create class Shipping with appropriate properties and method "calculateCost()"
 * - Create children class of Notification such as RegularShipping, ExpressShipping, SameDayShipping
 * - each child should override "calculateCost()"
 * - add another shipping type "InternationalShipping" with cost 100.000 / kg
 * - protect "package weight" in order to another class can't access it directly. Use method "getWeight"
 * for get value of package weight
 */

class Shipping {
    constructor(
        public trackingNumber: string,
        public destination: string,
        private weight: number
    ) { }

    getWeight(): number {
        return this.weight;
    }

    calculateCost(): number {
        return 0;
    }

    showShipment(): void {
        console.log("---------------------");
        console.log(`Tracking: ${this.trackingNumber}`);
        console.log(`Destination: ${this.destination}`);
        console.log(`Weight: ${this.getWeight()} kg`);
    }
}

class RegularShipping extends Shipping {
    calculateCost(): number {
        return this.getWeight() * 10000;
    }
}

class ExpressShipping extends Shipping {
    calculateCost(): number {
        return this.getWeight() * 20000;
    }
}

class SameDayShipping extends Shipping {
    calculateCost(): number {
        return this.getWeight() * 30000;
    }
}

class InternationalShipping extends Shipping {
    calculateCost(): number {
        return this.getWeight() * 100000;
    }
}

const regularShipping = new RegularShipping("REG001", "Malang", 3);
const expressShipping = new ExpressShipping("EXP001", "Surabaya", 2);
const sameDayShipping = new SameDayShipping("SMD001", "Jakarta", 4);
const internationalShipping = new InternationalShipping("INT001", "Singapore", 5);

const shipments: Shipping[] = [
  regularShipping,
  expressShipping,
  sameDayShipping
];

for (const shipment of shipments) {
  shipment.showShipment();
}
console.log("---------------------");