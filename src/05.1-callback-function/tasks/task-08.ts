/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

type TransactionStatus = "paid" | "pending" | "cancelled";

type Transaction = {
    id: string;
    customer: string;
    amount: number;
    status: TransactionStatus;
};

const transactions: Transaction[] = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

type TransactionCategory = "HIGH VALUE" | "MEDIUM VALUE" | "LOW VALUE";
type TransactionWithCategory = Transaction & { category: TransactionCategory };
type TransactionWithFee = Transaction & { fee: number };

// Reusable data-processing engine function using generic callback
function processTransactions<T>(
    transactions: Transaction[],
    callback: (transaction: Transaction) => T
): T[] {
    const results: T[] = [];
    for (const transaction of transactions) {
        results.push(callback(transaction));
    }
    return results;
}

// 1. Callback to extract customer's name
function getCustomerName(transaction: Transaction): string {
    return transaction.customer;
}

// 2. Callback to determine transaction category
function getTransactionCategory(transaction: Transaction): TransactionWithCategory {
    let category: TransactionCategory;
    if (transaction.amount >= 2000000) {
        category = "HIGH VALUE";
    } else if (transaction.amount >= 1000000) {
        category = "MEDIUM VALUE";
    } else {
        category = "LOW VALUE";
    }

    return { ...transaction, category };
}

// 3. Callback to calculate platform fee
function calculatePlatformFee(transaction: Transaction): TransactionWithFee {
    let feeRate = 0;
    if (transaction.status === "paid") {
        feeRate = 0.02;
    } else if (transaction.status === "pending") {
        feeRate = 0.01;
    } else {
        feeRate = 0;
    }

    const fee = transaction.amount * feeRate;
    return { ...transaction, fee };
}

// Execute processing with callbacks
const customerNames = processTransactions(transactions, getCustomerName);
const transactionsWithCategory = processTransactions(transactions, getTransactionCategory);
const transactionsWithFee = processTransactions(transactions, calculatePlatformFee);

// Display results
console.log("====== CUSTOMER NAMES ======");
console.log(customerNames);

console.log("\n====== TRANSACTION CATEGORIES ======");
console.log(transactionsWithCategory);

console.log("\n====== PLATFORM FEES ======");
console.log(transactionsWithFee);