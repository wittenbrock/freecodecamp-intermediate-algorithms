/* 
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

let truthCheck = (collection, pre) => {
  return collection.every(obj => {
      switch (obj.hasOwnProperty(pre)) {
          case obj[pre] === 0:
          case obj[pre] === '':
          case obj[pre] === undefined:
          case obj[pre] === null:
          case String(obj[pre]) === "NaN":
              return false;
          default:
              return true;
      }
  })
}
let truthCheck = (collection, pre) => {
return collection.every(el => el.hasOwnProperty(pre) && Boolean(el[pre]))
}
let truthCheck = (collection, pre) => collection.every(obj => obj[pre]);