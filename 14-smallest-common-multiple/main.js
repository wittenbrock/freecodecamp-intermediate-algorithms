/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

let smallestCommons = arr => {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let grandLCM;
  for (let i=min; i<max; i++) {
      if (i===min){
          grandLCM = (i * (i+1))/gcd(i, i+1);
      } else{
          grandLCM = (grandLCM * (i+1))/gcd(grandLCM, i+1);
      }
  }
  return grandLCM;
  function gcd(x, y) {    // Implements The Euclidean Algorithm
  if (y === 0)
      return x;
  else
      return gcd(y, x%y);
  }
}