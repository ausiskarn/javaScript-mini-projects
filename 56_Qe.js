// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

const occurrences = function (string, char) {
    let counter =0;
    for(let i = 0; i<string.length;i++){
        if(char === string[i]){
            counter++
        }
    }
    console.log(counter)
}

console.log(occurrences("hello ;a ; la la ","l"))