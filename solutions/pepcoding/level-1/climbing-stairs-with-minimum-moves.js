/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/climb-stairs-with-minimum-moves-official/ojquestion

Approach

1. Top down
- The memo[i] represents the minimum number of moves to reach the last stair from the ith stair.
- At each stair, we have at most k choices or jumps that we can make.
- After making a choice, recursively solve for the smaller subproblems and store the solution in the memo.
- If the last stair is reached, then return 0 which is the minimum moves to reach the last stair.
- If out of bounds, then return a maximum value to indicate that last stair is not reachable.
- If the current subproblem is already solved, then return it's solution instead of recomputing the solution again.

Time - O(n*k)
Space - O(n)

2. Bottom up
- Create a memo and initialize with base cases.
- The memo[i] represents the minimum number of moves to reach the last stair from the ith stair.  
- At each stair, we have at most k choices or jumps that we can make.
- Use the memo to get the solution for smaller subproblems.
- Print memo[0] which contains the solution for the main problem.

Time - O(n*k)
Space - O(n)

n - number of stairs
k - maximum jump length

*/

/* Top down */

const minJumps = (i, n, arr, memo) => {
  if (i === n) {
    return 0;
  }
  if (i > n) {
    return Number.MAX_VALUE;
  }
  if (memo[i] != -1) {
    return memo[i];
  }
  let moves = Number.MAX_VALUE;
  for (let j = 1; j <= arr[i]; j++) {
    moves = Math.min(moves, 1 + minJumps(i + j, n, arr, memo));
  }
  memo[i] = moves;
  return memo[i];
};

const solve = (n, arr) => {
  const memo = new Array(n + 1).fill(-1);
  const result = minJumps(0, n, arr, memo);
  console.log(result);
};

/* Bottom up */

const solve2 = (n, arr) => {
  const memo = new Array(n + 1).fill(-1);
  memo[n] = 0;
  for (let i = n - 1; i >= 0; i--) {
    let moves = Number.MAX_VALUE;
    for (let j = 1; j <= arr[i]; j++) {
      if (i + j <= n) {
        moves = Math.min(moves, 1 + memo[i + j]);
      }
    }
    memo[i] = moves;
  }
  const result = memo[0];
  console.log(result);
};
