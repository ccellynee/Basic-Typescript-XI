/**
 * An online store supports several payment methods.
 * Every payment has:
 * - Transaction ID
 * - Amount
 * 
 * But each payment method processes the transaction differently.
 * -  Credit card's processing fee is 2% of payment amount
 * -  Bank Transfer's processing fee is 5000
 * -  E Wallet's processing 1% of payment amount
 * 
 * Example transactions:
 * ---------------------
 * Credit Card
 * Transaction: TRX001
 * Amount: Rp1,000,000
 * ---------------------
 * Bank Transfer
 * Transaction: TRX002
 * Amount: Rp750,000
 * ---------------------
 * E-Wallet
 * Transaction: TRX003
 * Amount: Rp500,000
 * ---------------------
 */

class Payment {
    constructor(
        public transactionId: string,
        protected amount: number
    ) { }

    calculateFee(): number {
        return 0;
    }

    showTransaction(): void {
        console.log("---------------------");
        console.log(`Transaction: ${this.transactionId}`);
        console.log(`Amount: Rp${this.amount.toLocaleString("en-US")}`);
    }
}

class CreditCardPayment extends Payment {
    calculateFee(): number {
        return this.amount * 0.02;
    }

    showTransaction(): void {
        console.log("---------------------");
        console.log("Credit Card");
        console.log(`Transaction: ${this.transactionId}`);
        console.log(`Amount: Rp${this.amount.toLocaleString("en-US")}`);
    }
}

class BankTransferPayment extends Payment {
    calculateFee(): number {
        return 5000;
    }

    showTransaction(): void {
        console.log("---------------------");
        console.log("Bank Transfer");
        console.log(`Transaction: ${this.transactionId}`);
        console.log(`Amount: Rp${this.amount.toLocaleString("en-US")}`);
    }
}

class EWalletPayment extends Payment {
    calculateFee(): number {
        return this.amount * 0.01;
    }

    showTransaction(): void {
        console.log("---------------------");
        console.log("E-Wallet");
        console.log(`Transaction: ${this.transactionId}`);
        console.log(`Amount: Rp${this.amount.toLocaleString("en-US")}`);
    }
}

const creditCardPayment = new CreditCardPayment(
    "TRX001",
    1000000
);

const bankTransferPayment = new BankTransferPayment(
    "TRX002",
    750000
);

const eWalletPayment = new EWalletPayment(
    "TRX003",
    500000
);

const payments: Payment[] = [
    creditCardPayment,
    bankTransferPayment,
    eWalletPayment
];

for (const payment of payments) {
    payment.showTransaction();
}
console.log("---------------------");