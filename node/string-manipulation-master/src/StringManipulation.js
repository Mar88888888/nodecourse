//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length;
}

//count the number of vowels in the given String and return the value
const vowels = ['a', 'e', 'i', 'o', 'u', 'y',]
const countVowels = (str) => {
  let vowelCount = 0;  
  for(letter of str){
    if(vowels.includes(letter)){
      vowelCount++;
    }
  }
  return vowelCount;
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  return str.indexOf(checkStr) !== -1;
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  return str.replace(/\w\S*/g, function (word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
});
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  let words = str.split(' ');

  let largestWord = '';
  let largestLength = 0;

  for (var i = 0; i < words.length; i++) {
      let currentWord = words[i].replace(/[^a-zA-Z]/g, '');

      if (currentWord.length > largestLength) {
          largestWord = currentWord;
          largestLength = currentWord.length;
      }
  }

  return largestWord;
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}