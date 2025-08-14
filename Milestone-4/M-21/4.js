const prices = [20000, 150000, 3455, 45465,4545]

function getMin(numbers){
    for(const num of numbers){
        let min = numbers[0];
        if(num<min){
            min<min;

        }
        return min; 
        
    }
}


const cheap = getMin(prices);
console.log('Cheapest one is: ', cheap);