// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 

const findGreatestLower = arr => {
    n = arr.length;
    arr.sort(function(a,b){
        return a-b;
    });
    const myarr = new Array;
    const result = new Array;

    for(let i=0;i<n;i++){
        if(arr[i-1]!==arr[i]){
            myarr.push(arr[i])
        }
    }
    result.push(myarr[1],myarr[myarr.length-2])
    return result.join(',')
}
myarr = [3,6,2,2,6,7,0,0,9]
console.log(findGreatestLower(myarr))