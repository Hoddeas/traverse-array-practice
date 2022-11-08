let results = ["Yes", "No", "Maybe", "No", "Yes", "Yes", "No", "Maybe", "No", "Maybe", "Yes", "Yes"];
let amountOfYes = 0;
let amountOfNo = 0;
let amountOfMaybe = 0;
for (let i = 0; i < results.length; i++) {
    if (results[i] === "Yes") {
        amountOfYes++;
    } else if (results[i] === "No") {
        amountOfNo++;
    } else {
        amountOfMaybe++;
    };
};
console.log(`Yes: ${amountOfYes}, No: ${amountOfNo}, Maybe: ${amountOfMaybe}`);

let ages = [18, 12, 24, 13, 52, 34, 28, 9, 16, 15, 30, 50];
let agesUnder18 = 0;
let ages18AndOver = 0;
for (let i = 0; i < results.length; i++) {
    if (ages[i] < 18) {
        agesUnder18++;
    } else {
        ages18AndOver++;
    };
};
console.log(`Ages 18 and over: ${ages18AndOver}, Ages under 18: ${agesUnder18}`);

let prices = [55, 10, 20, 34, 23, 15, 39, 25];

// Count the number of products under $20, the number of products $20 - $49 and the number of products $50 or higher.
let productsUnder20 = 0;
let productsBetween20And49 = 0;
let products50OrHigher = 0;
for (let i = 0; i < prices.length; i++) {
    if (prices[i] < 20) {
        productsUnder20++;
    } else if (prices[i] <= 49) {
        productsBetween20And49++;
    } else {
        products50OrHigher++;
    };
};
console.log(`Products under $20: ${productsUnder20}, Products $20 to $49: ${productsBetween20And49}, Products over $50: ${products50OrHigher}`);

// Increase price by $2
prices = [55, 10, 20, 34, 23, 15, 39, 25];
for (let i = 0; i < prices.length; i++) {
    prices[i] += 2;
};
console.log(prices);

// Increase price by 5%
prices = [55, 10, 20, 34, 23, 15, 39, 25];
for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] * 1.05;
};
console.log(prices);

// Decrease price by 20%
prices = [55, 10, 20, 34, 23, 15, 39, 25];
for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] * 0.8;
};
console.log(prices);
