// 19. Write a JavaScript function that returns array elements larger than a number.

const getValue = (arr,num) => arr.filter(n => n>num);

const arr = [2,35,6544,234,1232,56,342,2,3,4,55,]
console.log(getValue(arr,50))
