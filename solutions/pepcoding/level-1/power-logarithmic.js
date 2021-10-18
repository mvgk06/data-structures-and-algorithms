/* 

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/power-logarithmic-official/ojquestion

Approach
- If the exponent is even, then return the square of power of base where the exponent is reduced by half.
- Else return base times the square of power of base where exponent-1 is reduced by half.
- If exponent is equal to 0, then return 1.

Time - O(log(m))
Space - O(log(m))

n - base
m - exponent

*/

const helper = (n, m) => {
  if (m === 0) {
    return 1;
  }
  if (m % 2 === 0) {
    return helper(n, m / 2) * helper(n, m / 2);
  }
  return n * helper(n, (m - 1) / 2) * helper(n, (m - 1) / 2);
};

const solve = (n, m) => {
  const result = helper(n, m);
  console.log(result);
};
