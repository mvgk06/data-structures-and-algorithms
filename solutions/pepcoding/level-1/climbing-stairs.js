/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/climb-stairs-official/ojquestion

Approach

1. Top down
- The memo[i] represents the number of ways to reach the last stair from ith stair.
- For each stair, we have three choices either we can go to 1st, 2nd or the 3rd stair.
- After making the choice, recursively solve the smaller sub-problems and store the solutions in the memo.
- If the last stair is reached, then return 1 to indicate that we have found a way.
- If out of bounds, then return 0 to indicate that last stair is not reachable.
- If the current subproblem is already solved, return it's solution instead of recomputing the solution again.

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo array and initialize with base cases.
- The memo[i] represents the number of ways to reach the last stair from ith stair.
- For each stair, we have three choices either we can go to 1st, 2nd or the 3rd stair.
- Use the memo to get the solution of the smaller sub-problems.
- Print the first element of the memo which contains the solution to the main problem.

Time - O(n)
Space - O(n)

3. Bottom up (space optimized)
- To compute the current state, we need only the previous three states.
- Use three variables first, second, third to keep track of the previous states.
- Compute the solution for the current state and update the previous states.
- Print the variable third which contains the solution for the main problem.

Time - O(n)
Space - O(1)

n - number of stairs

*/

/* Top down */

const waysToClimb = (n, currStair, memo) => {
    if (currStair === n) {
        return 1;
    }
    if (currStair > n) {
        return 0;
    }
    if (memo[currStair] != -1) {
        return memo[currStair];
    }
    const first = waysToClimb(n, currStair + 1, memo);
    const second = waysToClimb(n, currStair + 2, memo);
    const third = waysToClimb(n, currStair + 3, memo);
    memo[currStair] = first + second + third;
    return memo[currStair];
};

const solve = (n) => {
    const memo = new Array(n).fill(-1);
    const result = waysToClimb(n, 0, memo);
    console.log(result);
};

/* Bottom up */

const solve2 = (n) => {
    if (n <= 2) {
        console.log(1);
        return;
    }
    if (n === 3) {
        console.log(2);
        return;
    }
    const memo = new Array(n + 1).fill(0);
    memo[n] = 1;
    memo[n - 1] = 1;
    memo[n - 2] = 2;
    for (let i = n - 3; i >= 0; i--) {
        memo[i] = memo[i + 1] + memo[i + 2] + memo[i + 3];
    }
    const result = memo[0];
    console.log(result);
};

/* Bottom up (space optimized) */

const solve3 = (n) => {
    if (n <= 2) {
        console.log(1);
        return;
    }
    if (n === 3) {
        console.log(2);
        return;
    }
    let first = 1, second = 1, third = 2;
    for (let i = n - 3; i >= 0; i--) {
        const curr = first + second + third;
        first = second;
        second = third;
        third = curr;
    }
    const result = third;
    console.log(result);
};