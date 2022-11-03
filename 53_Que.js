// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

const findNum = (base,exp) => {
    let num = 1
    for(let i=1;i<=exp;i++){
        num *= base
    }
    return num;
}
console.log(findNum(2,3))