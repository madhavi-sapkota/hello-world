/*Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.*/

function findLongestWordLength(str) {
    let words = str.split(' ')
    let maxLength = 0
    
    for (let i = 0; i < words.length; i++){
      if (words[i].length > maxLength){
        maxLength = words[i].length;
      }
    }
    
      return maxLength;
    }
    
    console.log (findLongestWordLength("The quick brown fox jumped over the lazy dog"));