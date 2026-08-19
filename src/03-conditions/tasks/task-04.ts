/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */
const customerName: string = "Nadia Putri";
const isPremium: boolean = true;
const roomAvailable: boolean = false;
let reservationResult: string;

if (roomAvailable) {
  if (isPremium) {
    reservationResult = "Room available. Premium member receives a free room upgrade.";
  } else {
    reservationResult = "Room available. Regular customer receives the reserved room.";
  }
} else {
  if (isPremium) {
    reservationResult = "No rooms available. Premium member is placed on the priority waiting list.";
  } else {
    reservationResult = "No rooms available. Regular customer is informed that no rooms are available.";
  }
}

console.log("Customer Name:", customerName);
console.log("Reservation Result:", reservationResult);