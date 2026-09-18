/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */

const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrders = orders.filter(
    (order) => order.status === "completed"
);

console.log("Completed Orders");
console.dir(completedOrders, { depth: null });

const orderTotals = orders.map((order) => {
    const total = order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return {
        customer: order.customer,
        total: total,
    };
});

console.log("\nTotal Value of Each Order");
console.log(orderTotals);

const highestSpender = orderTotals.reduce((highest, order) =>
    order.total > highest.total ? order : highest
);

console.log("\nHighest Spender");
console.log(highestSpender);

const totalRevenue = completedOrders.reduce((total, order) => {
    const orderTotal = order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return total + orderTotal;
}, 0);

console.log("\nTotal Revenue");
console.log(`Total Revenue: Rp${totalRevenue}`);

const purchasedProducts = [
    ...new Set(
        orders.flatMap((order) =>
            order.items.map((item) => item.product)
        )
    ),
];

console.log("\nPurchased Products");
console.log(purchasedProducts);