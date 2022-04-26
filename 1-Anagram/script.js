function countAnagrams(str) {
  let anagrams = {};
  let count = 0;
  let words = str.split(" ");
  words.forEach((word) => {
    // for input "adbc"
    // sort "adbc" to "abcd"

    const sorted = sortWord(word);
    if (sorted) {
      // Push the word into the array of anagrams object with [key] of sorted word.
      // anagram:{ abcd: [ 'abcd','adbc' ] }

      if (anagrams[sorted]) {
        return anagrams[sorted].push(word);
      }
      anagrams[sorted] = [word];
    }
  });
  Object.values(anagrams).forEach((wordArray) => {
    if (wordArray.length > 1) {
      count++;
    }
  });
  return count;
}

// Returns the sorted word.
function sortWord(word) {
  // if word is empty string return undefined.

  if (!word) return;
  let character = word.split("");
  character.sort();
  return character.join("");
}

console.log(countAnagrams("abcd adbc csit itcs aae eaa bca")); // 3
