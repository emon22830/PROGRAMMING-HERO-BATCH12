const heights = [45,56,45,67,45,78,54];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        
        if(num>max){
            max = num
        }
        
    }
    return max
}




const max = getMax(heights);
console.log("Max value is", max)