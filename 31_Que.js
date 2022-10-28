// Write a program to find the sum of the given series 1+2+3+ . . . . . .(N terms) 

const N = parseInt(prompt("Enter a number: "))


let sum = 0;
function summ (N){
    for(let i=0;i<=N;++i){
        sum += i
        
    }
    console.log(sum)
}
summ(N)