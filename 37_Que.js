// Write a JavaScript function that checks whether a passed string is palindrome or not?

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