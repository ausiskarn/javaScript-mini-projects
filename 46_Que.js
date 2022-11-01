/* 8. Write a JavaScript funciton that accepts a number as a parameter and check then the number is prime or not. */

const checkPrime = num => {
    if(num===1){
        return false;
    }
    else if(num===1){
        return true;
    }
    else {
        for(let i=2; i<num;i++){
            if(num%i==0){
                return false
            }
        }
        return true
    }
}
console.log(checkPrime(18))