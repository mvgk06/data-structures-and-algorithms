/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/target-sum-subsets-dp-official/ojquestion

Approach

1. Top down
- The memo[i][j] represents whether it is possible to form a subset of sum j if elements till the index i is used. 
- At each index, we have two choices either we pick or don't pick the current element.
- After making the choice, recursively solve the smaller sub-problems and store the solutions in the memo.
- If the index becomes equal to 0 and if the sum is 0, then return 1 to indicate that the sum is possible.
- Else return 0 to indicate that the sum is not possible.
- If the current subproblem is already solved, then return it's solution instead of recomputing the solution again.

Time - O(n*target)
Space - O(n*target)

2. Bottom up
- Create a memo array and initialize the base cases.
- The memo[i][j] represents whether it is possible to form a subset of sum j if the size of the input is i.
- At each index, we have two choices either we pick or don't pick the current element.
- Use the memo to get the solutions of smaller sub-problems.
- Print the cell (n,target) which contains the solution for the main problem.

Time - O(n*target)
Space - O(n*target)

3. Bottom up (space optimized)
- To compute the solutions of the sub problems in the current row we only need the solution for the previous row.
- Use two arrays current and previous to keep track of the sub problems.
- Compute the solution for the current row using the previous row.
- Update the previous row as current row.
- Print prev[target] which contains the solution for the main problem.

Time - O(n*target)
Space - O(target)

n - number of elements
target - sum of the subset

*/

/* Top down */

const targetSum = (arr, index, target, memo) => {
  if (index === 0) {
    if (target === 0) {
      memo[index] = 1;
    } else {
      memo[index] = 0;
    }
    return memo[index];
  }
  if (memo[index][target] != -1) {
    return memo[index][target];
  }
  if (arr[index] <= target) {
    const pick = targetSum(arr, index - 1, target - arr[index], memo);
    const dontPick = targetSum(arr, index - 1, target, memo);
    memo[index][target] = pick || dontPick;
  } else {
    const dontPick = targetSum(arr, index - 1, target, memo);
    memo[index][target] = dontPick;
  }
  return memo[index][target];
};

const solve = (n, arr, target) => {
  const memo = new Array(n);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(target + 1).fill(-1);
  }
  const result = targetSum(arr, arr.length - 1, target, memo);
  if (result === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
};

/* Bottom up */

const solve2 = (n, arr, target) => {
  const memo = new Array(n + 1);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(target + 1).fill(-1);
  }
  for (let i = 0; i < memo.length; i++) {
    memo[i][0] = 1;
  }
  for (let j = 1; j < memo.length; j++) {
    memo[0][j] = 0;
  }
  for (let i = 1; i < memo.length; i++) {
    for (let j = 1; j < memo[i].length; j++) {
      if (arr[i - 1] <= j) {
        memo[i][j] = memo[i - 1][j - arr[i - 1]] || memo[i - 1][j];
      } else {
        memo[i][j] = memo[i - 1][j];
      }
    }
  }
  const result = memo[n][target];
  if (result === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
};

/* Bottom up (space optimized) */

const solve3 = (n, arr, target) => {
  let prev = new Array(target + 1);
  prev[0] = 1;
  for (let j = 1; j < prev.length; j++) {
    prev[j] = 0;
  }
  for (let i = 1; i <= n; i++) {
    const curr = new Array(target + 1);
    curr[0] = 1;
    for (let j = 1; j <= target; j++) {
      if (arr[i - 1] <= j) {
        curr[j] = prev[j - arr[i - 1]] || prev[j];
      } else {
        curr[j] = prev[j];
      }
    }
    prev = [...curr];
  }
  const result = prev[target];
  if (result === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
};
