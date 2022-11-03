# Day 1 (30-oct-022)
`1. Write a JavaScript function that reverse a number.`
```
function rev(n){
    n = n + "";
    return n.split("").reverse().join("")
}
console.log(rev(12458))
```
`2.Write a JavaScript function that checks whether a passed string is palindrome or not?`
```
const checkPalindrome = str => {
    const n=str.length
    for(let i=0;i<n/2; i++){
        if(str[i] != str[n-1-i]){
            return `${str} is not Palindrome.`
        }
        else {
            return `${str} is palindrome`
        }
    }
}
console.log(checkPalindrome("dad"))
```
`3. Write a JavaScript function that generates all combinations of a string `
```
let possibleCombination = str => {
    let combinations = [];
    for(let i=0;i< str.length;i++){
        for(let j=i+1;j<str.length +1; j++){
            combinations.push(str.slice(i,j))
        }
    }
    return combinations;
}
console.log(possibleCombination("hello"));
```
`4. Write a JavaScript function that returns a passed string with letters in alphabetical order.`
```
const checkAlpha = str => {
    let final = str.split("").sort().join("")
    console.log(final)
}
checkAlpha("webmaster")
```
`5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case`
```
const changeCase = str => {
    const fLetter = str[0].toUpperCase();
    let remaining =[]
    for(let i=1;i<str.length;i++){
        remaining += str[i]
    }
    console.log(fLetter+remaining)
}
changeCase("gandu")
```
`6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.`
```
const longestWord = function(str){
    let word = str.split(" ");
    let temparr = word[0]

    for(let i=0; i<word.length; i++){
        if(temparr.length < word[i].length){
            temparr = word[i]
        }
    }
    console.log(temparr)
}
longestWord('I love cat and dog but not donkey')
```
`7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.`
```
const noOfVowels = str => {
    const vowel = 'aeiouAEIOU'
    let a = vowel.length;
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(vowel.indexOf(str[i]) !== -1) {
            count += 1;
        }
    }
    return count
}
console.log(noOfVowels("The quick brown fox"))
```
`8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.`
```
const testnum = n => {
    if(n===1){
        return false;
    }
    else if(n===2){
        return true;
    }
    else {
        for(let i=2;i<n;i++){
            if(n%i==0){
                return false;
            }
        }
        return true
    }
}
console.log(testnum(17))
```
`9. Write a JavaScript function which accepts an argument and returns the type. 

Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.`
```
const typeFinder = a => {
    let datatype = [Function,RegExp,Number,String,Boolean,Object],x;
    let len = datatype.length
    if(typeof(a) === "object" || typeof(a) === "function"){
        for(x=0;x<len;x++){
            if( a instanceof datatype[x]){
                return datatype[x]
            }
        }
    }
    return typeof a
}

console.log(typeFinder(1))
```
`instance of: The instanceof operator tests the presence of constructor.prototype in object's prototype chain. `

`10. Write a JavaScript function which returns the n rows by n columns identity matrix.`
```
const makingMatrix = num => {
    for(let i=0;i<num;i++){
        for(let j=0;j<num;j++){
            if(i===j){
                console.log(1)
            }
            else {
                console.log(0)
            }
        }
       console.log("________")
    }
}
makingMatrix(4)
```
` 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. `
```
const findGreatestLower = arr => {
    n = arr.length;
    arr.sort(function(a,b){
        return a-b;
    });
    const myarr = new Array;
    const result = new Array;

    for(let i=0;i<n;i++){
        if(arr[i-1]!==arr[i]){
            myarr.push(arr[i])
        }
    }
    result.push(myarr[1],myarr[myarr.length-2])
    return result.join(',')
}
myarr = [3,6,2,2,6,7,0,0,9]
console.log(findGreatestLower(myarr))
```
`
// 12. Write a JavaScript function which says whether a number is perfect.
`  
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
```
const checkPerfect = num => {
    let temp =0;
    for(let i=1;i<=num/2;i++){
        if(num%i===0){
            temp += i;
        }
    }
    if(temp === num && temp !== 0){
        return num + " is a perfect number."
    }
    else {
        return num + " is not a perfect number."
    }
}
console.log(checkPerfect(6))

```
`13. Write a JavaScript function to compute the factors of a positive integer.`
```
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
console.log(findFactors(15))
```
`
 14. Write a JavaScript function to convert an amount to coins.
`
 Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1 
```
function amountTocoins(amt, coins) {
    let temp = []

    if(amt===0){
        return 0;
    }
    else {
        if(amt>=coins[0]){
            let left = (amt-coins[0])
            return [coins[0]].concat(amountTocoins(left,coins));
        }
        else {
            coins.shift();
            return amountTocoins(amt,coins)
        }
    }

}

console.log(amountTocoins(46, [25, 10, 5, 2, 1]))
```
`
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
`
```
const findNum = (base,exp) => {
    let num = 1
    for(let i=1;i<=exp;i++){
        num *= base
    }
    return num;
}
console.log(findNum(2,3))
```
`16. Write a JavaScript function to extract unique characters from a string.`
```
const getUniqueString = string => {
    let uniqueString = '';
    for(let i=0;i<string.length;i++){
        if(uniqueString.indexOf(string.charAt(i))==-1){
            uniqueString += string[i]
        }
    }
    return uniqueString
}
console.log(getUniqueString("hellodearhowareyou"))
```