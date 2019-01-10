/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

let fearNotLetter = str => {
  const alphabet = "abcdefghiklmnopqrstuvxyz";
  const alphabetArray = alphabet.split('');
  let sliceMachine = string => {
      const beginning = alphabet.indexOf(string[0]);
      const end = alphabet.indexOf(string[string.length - 1]);
      return alphabet.slice(beginning, end + 1).split('');
  }
  let diffArray = (arr1, arr2) => {
    return arr1.filter(item => !arr1.includes(item) || !arr2.includes(item))
  }
  let result = diffArray(sliceMachine(str), str);
  return result[0];
