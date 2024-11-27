// var x = "shabu";
// var y = 123;
// var z = "sheba";

const numbers = [52,84,9,47,30,69,24];
// Index number   0, 1,2, 3, 4, 5, 6
// Length of this array= 6

// index number dia nirdisto man k ber kora jay
console.log(numbers[3]);

// different way 
const x = numbers[6];
console.log(x);

// To add an extra element in Array
numbers.push(99);
// push korle array er last a element add hoy 

numbers.pop();
// pop korle array er last a element delete hoa jay

const fruits = ["amm", "jaam", "kathal"];
const flowers = ["golap", "joba", "sapla"];
const names = ["shabu", "sheba"];

// 2 ta array k akta array te rupantor
const akakar = fruits.concat(flowers,names);
console.log(akakar)
