const disha = 56;
const salman = 95;

if (disha > salman){
    console.log("Disha will get the  mango");
}
else{
    console.log("Salman will eat the mango");
}

// INSIDE FUNCTION  //

function getMax(num1, num2){
    if (num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max = getMax(56,79);
console.log( "Max of two is:", max); 

// ********************************* Using math.max-----------------

const max2 = Math.max(12,5,98,26,632,8,45,902,18,675,48)
console.log("Max is:",max2)
