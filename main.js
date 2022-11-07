let results = ["Yes", "No", "Maybe", "No", "Yes", "Yes", "No", "Maybe", "No", "Maybe", "Yes", "Yes"];
let amountOfYes = 0;
let amountOfNo = 0;
let amountOfMaybe = 0;
for (let i = 0; i < results.length; i++) {
    if (results[i] === "Yes") {
        amountOfYes++;
    } else if (results[i] === "No") {
        amountOfNo++;
    } else if (results[i] === "Maybe") {
        amountOfMaybe++;
    };
};
console.log(`Yes: ${amountOfYes}, No: ${amountOfNo}, Maybe: ${amountOfMaybe}`);

let ages = [18, 12, 24, 13, 52, 34, 28, 9, 16, 15, 30, 50];
let agesUnder18 = 0;
let ages18AndOver = 0;
for (let i = 0; i < results.length; i++) {
    if (ages[i] <= 18) {
        ages18AndOver++;
    } else {
        agesUnder18++;
    };
};
console.log(`Ages 18 and over: ${ages18AndOver}, Ages under 18: ${agesUnder18}`);

