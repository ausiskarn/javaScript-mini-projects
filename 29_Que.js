// Given an unsorted array Arr[] of N integers and a Key which is present in this array. You need to write a program to find the start index( index where the element is first found from left in the array ) and end index( index where the element is first found from right in the array ).

const a = [1, 2, 3, 4, 5, 5] ;
const n = 6;
const key =5



var arr =[];
arr[0] = a.indexOf(key)
arr[1] = a.lastIndexOf(key);
console.log(arr)
