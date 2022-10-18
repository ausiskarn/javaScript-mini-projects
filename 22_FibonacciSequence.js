// The fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that , the next term is defined as the sum of the previous  two terms.
// Example: 0, 1, 1,2,3,5,8, 13, 21,...

let a = 0; b = 1;
console.log(a)
console.log(b)

for(i=0; i<8;i++){
    let temp = a + b;
    console.log(temp);
    b=a;
    a=temp;
}