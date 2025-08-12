// function discountedPrice(quantity){
//     if(quantity<=100){
//         const total = quantity * 100;
//         return total;
//     }
//     else if(quantity <=200){
//         const total = quantity * 90;
//         return total;
//     }
//     else{
//         const total = quantity * 70;
//         return total;
//     }
// }


// const total = discountedPrice(1001);
// console.log(total)



function layerDiscountedTotal (quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity<=100){
        const total = quantity * first100Price
    }
    else if(quantity<=200){
        const firs100total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price
        return total;
    }
    else{
        const first100Total = 100* first100Price;
        const second100Price = 100* second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Price+second100Price+above200Price
        return total;
    }
}

const total = layerDiscountedTotal(105);
console.log(total);