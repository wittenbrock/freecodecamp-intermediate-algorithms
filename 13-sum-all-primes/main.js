/* Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime. */

let sumPrimes = num => {
  let isPrime = value => {
      for(var i = 2; i < value; i++) {
          if(value % i === 0) {
              return false;
          }
      }
      return value > 1;
  }
  return Array.from({length: num + 1}, (v, i) => i)
      .filter(isPrime)
      .reduce((total, currentVal) => total += currentVal);
}