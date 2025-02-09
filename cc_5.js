// Task 1: Object Properties

const customerInfo = {
    name: "John doe",
    age: 35,
    email: "john.doe@gmail.com"
} // object as customer

console.log(`Name: ${customerInfo.name}`); // logging customer name
console.log(`Age: ${customerInfo.age}`); // logging customer age
console.log(`Email: ${customerInfo.email}`); // logging customer email

// Task 1: object methods

const order = {
    orderID: 12345,
    totalAmount: 150,
    status: "processing",
    displayOrder() {
        console.log(`Order ID: ${this.orderID}, Total: $${this.totalAmount}, Status: ${this.status}`);
    }
}; // console log of customer order details
order.displayOrder();

// task 3: Array Manipulation (push, pop, shift, unshift)

let cartItems = ["apple", "banana", "lemon"]; // array of cart items
cartItems.push("orange"); // adds new items
cartItems.pop(); // removes last item
cartItems.unshift("strawberry"); // adds new item to beginning
cartItems.shift(); // removes beginning item

console.log(cartItems);
