/* Return an English translated sentence of the passed binary string.

The binary string will be space separated. */

let binaryAgent = str => {
  return str
      .split(" ")
      .map(elem => String.fromCharCode(parseInt(elem, 2)))
      .join("");
}