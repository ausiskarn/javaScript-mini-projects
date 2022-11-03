// 13. Write a JavaScript function to compute the factors of a positive integer.

const findFactors = num => {
    let factors = [];
    for(let i=1;i<=num/2;i++){
        if(num%i===0){
            factors.push(i);
        }
    }
    factors.push(num);
    return factors;
}
console.log(findFactors(17))