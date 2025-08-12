const disha = 56;
const salman =95;



if(disha>salman){
    console.log("Get Money")
}

else(
    console.log("Salman will eat Apple")
)


//inside a function 
function getMax(num1, num2){
    if(num1>num2){
        return num1;
    }

    else{
        return num2;
    }
}


const max1 = getMax(96, 78);
const max2 = getMax(97, 78);
const ultimateMax = getMax(max1, max2);

console.log("MAX OF TWO IS: ", ultimateMax )
