/*

Problem
https://leetcode.com/problems/fibonacci-number/

Approach

1. Top down
- For each index, the solution is the sum of the previous two indexes.
- After making the choice, recursively solve the smaller sub-problems and store the solution in an array.
- If n becomes less than equal to 1 return n.
- If the current subproblem is already computed then return it instead of recomputing them.

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo array and initialize with base cases.
- For each index, the solution is the sum of the previous two indexes.
- Use the memo to get the solutions to the smaller sub-problems.
- Return the last element of the memo which contains the solution to the main problem.

Time - O(n)
Space - O(n)

3. Bottom up (2 elements)
- To compute the current subproblem we only need the solution of the previous two sub-problems.
- So keep two variables to store the solutions of the previous two sub-problems.
- Initialize the variables with the base case.
- Loop and compute the solution for n. 

Time - O(n)
Space - O(1)

n - number

*/

/* Top down */

const fibHelper = (n, memo) => {
    if (n <= 1) {
        return n;
    }

    if (memo[n] != -1) {
        return memo[n];
    }

    const first = fibHelper(n - 1, memo);
    const second = fibHelper(n - 2, memo);
    memo[n] = first + second;
    return memo[n];
};
const fib = function (n) {
    const memo = new Array(n + 1).fill(-1);
    return fibHelper(n, memo);
};

/* Bottom up */

const fib2 = function (n) {
    const memo = new Array(n + 1).fill(-1);
    memo[0] = 0;
    memo[1] = 1;

    for (let i = 2; i < memo.length; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }

    return memo[n];
};

/* Bottom up (2 elements) */

const fib3 = function (n) {
    let first = 0, second = 1;

    if (n === 0) {
        return first;
    }

    for (let i = 2; i <= n; i++) {
        const third = first + second;
        first = second;
        second = third;
    }

    return second;
};