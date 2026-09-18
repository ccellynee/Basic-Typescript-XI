/**
 * A digital wallet application stores information about a user's account.
 * 
 * A wallet has:
 * - Owner name
 * - Wallet ID
 * - Balance
 * 
 * For example, Jude Bellingham creates a wallet with:
 * | Property        | Value           |
 * | --------------- | --------------- |
 * | Wallet ID       | WAL001          |
 * | Owner           | Harry Maguire   |
 * | Initial Balance | Rp500,000       |
 * 
 * The application allows the user to:
 * - Deposit money
 * - Withdraw money
 * - Check the current balance
 * However, the balance must not be changed directly from outside the class.
 * 
 * Student Tasks:
 * Create: class DigitalWallet
 * Use:
 * - private balance: number;
 * 
 * The class should provide public methods:
 * - deposit(amount)
 * - withdraw(amount)
 * - getBalance()
 * - showWalletInfo()
 * 
 * Business Rules
 * deposit():
 * - Amount must be greater than 0.
 * 
 * withdraw():
 * - Amount must be greater than 0.
 * - Amount cannot exceed the current balance.
 */

class DigitalWallet {
    walletId: string;
    owner: string;
    private balance: number;

    constructor(walletId: string, owner: string, initialBalance: number = 0) {
        this.walletId = walletId;
        this.owner = owner;
        this.balance = initialBalance > 0 ? initialBalance : 0;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Successfully deposited Rp${amount.toLocaleString("id-ID")}. Current balance: Rp${this.balance.toLocaleString("id-ID")}`);
        } else {
            console.log("Deposit failed: Amount must be greater than 0.");
        }
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Withdrawal failed: Amount must be greater than 0.");
        } else if (amount > this.balance) {
            console.log(`Withdrawal failed: Insufficient balance. Current balance: Rp${this.balance.toLocaleString("id-ID")}`);
        } else {
            this.balance -= amount;
            console.log(`Successfully withdrew Rp${amount.toLocaleString("id-ID")}. Remaining balance: Rp${this.balance.toLocaleString("id-ID")}`);
        }
    }

    public getBalance(): number {
        return this.balance;
    }

    public showWalletInfo(): void {
        console.log("=== Digital Wallet Information ===");
        console.log(`Wallet ID : ${this.walletId}`);
        console.log(`Owner     : ${this.owner}`);
        console.log(`Balance   : Rp${this.balance.toLocaleString("id-ID")}`);
    }
}

const wallet1 = new DigitalWallet("WAL001", "Harry Maguire", 500000);
const wallet2 = new DigitalWallet("WAL002", "Jude Bellingham", 1000000);

wallet1.showWalletInfo();
console.log("");

console.log("TESTING DEPOSIT");
wallet1.deposit(200000);
wallet1.deposit(-50000); 
console.log("");

console.log("TESTING WITHDRAE");
wallet1.withdraw(300000);
wallet1.withdraw(1000000); 
wallet1.withdraw(0);
console.log("");

console.log("CEHCK BALANCE");
console.log(`Balance via getBalance(): Rp${wallet1.getBalance().toLocaleString("id-ID")}`);
console.log("");

wallet2.showWalletInfo();

