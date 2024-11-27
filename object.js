const person = {
    name: "Shabu",
    address: "Dinajpur",
    favColor: "Black",
    isMale: true,
}

// to know property name using key
const allProperty = Object.keys(person);
console.log(allProperty);

// to know values using values
const allValues = Object.values(person);
console.log(allValues);

// To Add a new value 
person.contact = "No contact";

// To modify value 
person.name = "Sheba";


// to delete any property 
delete person.isMale;

console.log(person);
console.log(person.name);