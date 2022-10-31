// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

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