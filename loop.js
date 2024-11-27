// FOR LOOP

// for(starting value; end value; increament or decreament){

// }
// 

for(let i = 1; i<=5; i++){
    console.log(We are done to run the loop five Time.);
}


//     while (condition){
//     tasks

//     looping increament or decreament
//     }

let i = 0;
while(i< = 5){
    console.log(We are done to run the loop five Time.);
    i++;
}


/* short form of for loop

*/
const flowers = ["golap", "joba", "sapla"];
for(let item of flowers){
    console.log(item);
}

// ulta korle reverse 

for(let item of flowers.reverse){
    console.log(item);
}


// To use break 

const x = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i<x.length; i++){
    if(x[i]===5){
        break;
    }
    console.log(x[i]);
}

// to use continue 

const n = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i<n.length; i++){
    if(n[i]===5){
        continue;
    }
    console.log(n[i]);
}