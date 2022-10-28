//Given a Integer array A[] of n elements. Your task is to complete the function PalinArray. Which will return 1 if all the elements of the Array are palindrome otherwise it will return 0.

const arr = [111, 121, 222, 333, 444]
const n = arr.length

function ispalindrome(N){
    //convert it into string to get the length and parse it again to number
    let str = ""+N;
    let n = str.length
    // let nn = parseInt(n/2,10)
    for(let i=0;i<n/2;i++){
        if(str[i]!=str[n-1-i]){
            return false
        }
        return true
    }  
    
}

function PalinArray(arr,n){
    for (let i=0 ; i< n; i++){
        let ans = ispalindrome(arr[i])
        if (ans==false) return false;
    }
    return true;
}

let res = PalinArray(arr,n)
if(res==true)
    console.log("Array is a Palindrome")
else 
    console.log("Array is not palindrome")
