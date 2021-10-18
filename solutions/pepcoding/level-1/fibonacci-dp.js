/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/fibonacci-dp-official/ojquestion

Approach

1. Top down
- The memo[i] represents the ith fibonacci number.
- For each index, the fibonacci is the sum of the previous two fibonacci.
- After making the choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If n is less than equal to 1, then return n.
- If the current subproblem is already solved, then return it's solution instead of recomputing the solution again.

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo array and initialize with base cases.
- The memo[i] represents the ith fibonacci number.
- For each index, the fibonacci is the sum of the previous two fibonacci.
- Use the memo to get the solutions to the smaller sub-problems.
- Print the last element of the memo which contains the solution of the main problem.

Time - O(n)
Space - O(n)

3. Bottom up (space optimized)
- To compute the current subproblem we only need the solution of the previous two sub-problems.
- So keep two variables to store the solutions of the previous two sub-problems.
- Compute the current sub problem and update the solution of previous sub problems.
- Print the variable second which contains the solution of the main problem.

Time - O(n)
Space - O(1)

n - number

*/

/* Top down */

const fib = (n, memo) => {
  if (n <= 1) {
    return n;
  }
  if (memo[n] != -1) {
    return memo[n];
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

const solve = (n) => {
  const memo = new Array(n + 1).fill(-1);
  const result = fib(n, memo);
  console.log(result);
};

/* Bottom up */

const solve2 = (n) => {
  if (n <= 1) {
    return n;
  }
  const memo = new Array(n + 1).fill(-1);
  memo[0] = 0;
  memo[1] = 1;
  for (let i = 2; i < memo.length; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  console.log(memo[n]);
};

/* Bottom up (space optimized) */

const solve3 = (n) => {
  if (n <= 1) {
    return n;
  }
  let first = 0,
    second = 1;
  for (let i = 2; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }
  console.log(second);
};
