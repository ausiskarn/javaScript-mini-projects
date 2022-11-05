// // 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// const  printname = countries => {
//     let req = countries[0]

//     for (let country of countries){
//         if(req.length<country.length){
//             req = country
//         }
//     }
//     return req
// }


// let arr = ["Australia", "Germany", "United States of America"]
// console.log(printname(arr))

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

// const  printname = countries => {
//     let req = countries[0]

//     for (let country of countries){
//         if(req.length<country.length){
//             req = country
//         }
//     }
//     return req
// }


let arr = ["Australia", "Germany", "United States of America"]
// console.log(printname(arr))

function a(s){
    let t =s.sort((m,n)=>n.length-m.length)
    return t[0]
}
console.log(a(arr))