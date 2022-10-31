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
