// 
// Sample arguments : 'abacddbec'
// Expected output : 'e'

const getNonRepeatingChars = arring => {
    let arr = arring.split("");
    let counter =0;
  //   result = 0;
  
    for(let i = 0;i<arring.length;i++){
      counter = 0
      for(let j =0;j<arring.length;j++){
          if(arr[i]===arr[j]){
              counter++
          }
      }
      if(counter<2){
        console.log(arr[i])
      }
    }
  }
  
  getNonRepeatingChars("ababbaccaef")

