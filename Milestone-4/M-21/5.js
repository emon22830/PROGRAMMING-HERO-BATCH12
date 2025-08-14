const numbers = [300, 100, 700, 1200];

const products = [
    {name: 'shampo', price:300},
    {name: 'shirt', price:100},
    {name: 'paint', price:700},
    {name:'pant', price:1200},
]



function getShoppingTotal(products){
    total = 0;
    for(const product of products){
        console.log(product) 
        total = total + product.price
    }
    return total; 
}

const total = getShoppingTotal(products);
console.log("Total cost: ", total)