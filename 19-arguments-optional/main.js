/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

let addTogether = (...args) => {
  let isNumber = elem => typeof elem === 'number' ? true : false;
  if (args.length > 1) {
      let num1 = args[0], num2 = args[1];
      if (isNumber(num1) && isNumber(num2)) {
          return num1 + num2;
      } else {
          return undefined
      }
  } else {
      let num3 = args[0];
      if (isNumber(num3)) {
          return function(arg2) {
              if (isNumber(arg2)) {
                  return num3 + arg2;
              }
          }
      } else {
          undefined
      }
  }
};