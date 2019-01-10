/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase. */

let translatePigLatin = str => {
  const consonantBlock = /(^[^a, e, i, o, u]+)(\w+)/g;
  const vowels = /[a, e, i, o, u]/gi;
  if (str.search(vowels) === -1) {
      return str + 'ay';
  } else if (!(str.search(consonantBlock) === -1)) {
      return str.replace(consonantBlock , '$2$1ay');
  } else {
      return str + 'way';
  }
}