// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

const changeCase = str => {
    const fLetter = str[0].toUpperCase();
    let remaining =[]
    for(let i=1;i<str.length;i++){
        remaining += str[i]
    }
    console.log(fLetter+remaining)
}
changeCase("gandau")