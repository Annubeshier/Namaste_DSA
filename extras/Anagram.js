// to find if two strings are Anangram or not
// method 1
function checkAnagram(str1, str2) {
  let newStr1 = str1.split("").sort().join("");
  let newStr2 = str2.split("").sort().join("");
  if (newStr1 === newStr2) {
    return true;
  } else {
    return false;
  }
}
let result = checkAnagram("earth", "heart");
console.log(result)


//method 2 

function checkAnagram2(strOne , strTwo){
    if(strOne.length === strTwo.length) return false;
    let charCount = {};

    for(let char of strOne){
        charCount[char]  = charCount[char] + 1 || 1;
    }
    for(let char of strTwo){
        if(!charCount[char]){
            return false;
        }
        charCount[char]--;
    }
        return true;
}
let result1 = checkAnagram2("earth", "heart");
console.log(result1)
