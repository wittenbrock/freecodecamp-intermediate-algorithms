/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order. */

let diffArray = (arr1, arr2) => {
  const master = [...arr1, ...arr2];
  let finalArray = [];
  let checker = (masterArray, array) => {
      masterArray.forEach(elem => {
          let includes = arr1.includes(elem);
          if (!includes) {
              finalArray.push(elem)
          }
      })
  }
  checker(master, arr1);
  checker(master, arr2);
  return finalArray;
}