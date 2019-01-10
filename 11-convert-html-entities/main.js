/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

let convertHTML = str => {
  const map = {
      "&": `&amp;`,
      "<": `&lt;`,
      ">": `&gt;`,
      "\"": `&quot;`,
      "\'": `&apos;`
  }
  return [...str].map(letter => map[letter] || letter).join('');
}