const longestWord = (str) => {
  const words = str.split(" ");
  let longest = "";
  words.forEach((word) => {
    if (cleanString(word)) {
      // if cleaned word is longer than longest word then set longest word to cleaned word.

      longest =
        cleanString(word).length > longest.length ? cleanString(word) : longest;
    }
  });
  return longest;
};

// Remove Special Characters from word
const cleanString = (word) => {
  // if word is empty string return undefined else return cleaned word.
  // Word may only contain letters and numbers.
  // Remove special characters from word.

  return word ? word.replace(/[^a-zA-Z0-9]/g, "") : undefined;
};

console.log(longestWord("This!!  is@55 an&& example of a** longest1 word"));
