// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

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

