/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/print-zig-zag-official/ojquestion

Approach
- Print the current number on the left, mid and right of the pattern for smaller sub problem (recursively solve for smaller sub-problems).
- If the current number is equal to 0, then return.

Time - O(n)
Space - O(n)

n - number

*/

const helper = (n) => {
  if (n === 0) {
    return;
  }
  process.stdout.write(`${n} `);
  helper(n - 1);
  process.stdout.write(`${n} `);
  helper(n - 1);
  process.stdout.write(`${n} `);
};

const solve = (n) => {
  helper(n);
};
