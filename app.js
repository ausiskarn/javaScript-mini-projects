// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.


function count(string) {
  return string.split("").reduce(
    (acc, el) => {
      if(acc.hasOwnProperty(el))
        acc[el]++;
      else
        acc[el] = 1;
      return acc;
    }, {}
  )
}
var data = count("thequickbrownfoxjumpsoverthelazydog");
console.log(data);
