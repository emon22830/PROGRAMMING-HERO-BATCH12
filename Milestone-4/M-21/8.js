// function multiply(num1, num2){
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return 'Please Provide a number'
//     }
//     const mult = num1 * num2;
//     return mult;
// }


// const result = multiply(1,'as');
// console.log(result)



function fullName(first, second){
    if(typeof first !== 'string'){
            return "First Name Should Be String"
    }
    else if(typeof second !== 'string'){
        return 'Second name also should be string'
    }
    const full = first + " "+second;
    return full;
}

const full = fullName("MD EMON", 5 );
console.log(full);