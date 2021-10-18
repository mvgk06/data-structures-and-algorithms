/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/print-increasing-official/ojquestion

Approach
- Recursively solve for smaller sub problems.
- Print the current number.
- If the number is equal to 0, then return.

Time - O(n)
Space - O(n)

n - number

*/

const helper = (n) => {
  if (n === 0) {
    return;
  }
  helper(n - 1);
  console.log(n);
};

const solve = (n) => {
  helper(n);
};
