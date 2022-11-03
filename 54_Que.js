// 16. Write a JavaScript function to extract unique characters from a string.

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