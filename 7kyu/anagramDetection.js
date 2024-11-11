// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

var isAnagram = function(test, original) {
  // Convert both strings to lowercase, split into characters, sort them, and join back
  const sortedTest = test.toLowerCase().split('').sort().join('');
  const sortedOriginal = original.toLowerCase().split('').sort().join('');
  
  // Return true if sorted strings are equal, otherwise false
  return sortedTest === sortedOriginal;
};
