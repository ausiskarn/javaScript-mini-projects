//Palindrome: A string is a palindroe if it read the same from forward or backward.
// example: dad , madam

const string = prompt("Enter a string")
const stringArray = string.split('');
const stringRev = stringArray.reverse();
const revString = stringRev.join('');

if(string===revString){
    document.write(string+ " is Palindrome.")
}else {
    document.write(string+ " is not Palindrome.")

}
