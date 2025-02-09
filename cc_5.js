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

// Task 4: map method

let prices = [100, 200, 300]; // array of prices
const discount = 0.9; // 10% discount
let discountPrices = prices.map(prices => prices * discount)
console.log(discountPrices);

// Task 5: Filter Method

let inventory = [3, 0, 7, 2, 10, 9]; // array of inventory
let availableProducts = inventory.filter(stock => stock > 0); // filter out no stocks
console.log(availableProducts);

// Task 6: Reduce Method

let sales = [500, 300, 200, 400]; // array of sales
let totalRevenue = sales.reduce((total, sales) => total + sales, 0); // function for total revenue
console.log(totalRevenue);

// Task 7: find() Method

let customers = ["Alice", "Bob", "Charlie", "David"]; // array of customer names
let customer = customers.find(c => c === "Charlie"); // finding customer Charlie
console.log(customer);

// Task 8: Function Declaration

function calculateTax(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Calculated Tax is: $${tax}`);
    return tax;
}; // return calculated tax of an amount
calculateTax(100, 0.07);

// Task 9: Function Expression

const applyDiscount = function(price, discount) {
    let discountedPrice = price - (price * discount);
    console.log(`Discounted Price: $${discountedPrice}`);
    return discountedPrice;
}; // function to apply discount
applyDiscount(200, 0.50)
