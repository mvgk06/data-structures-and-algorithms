/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/fibonacci-dp-official/ojquestion

https://leetcode.com/problems/fibonacci-number/

Approach

1. Top down
- Each state in the memo represents the ith fibonacci number.
- For each index, the fibonacci is the sum of the previous two fibonacci.
- After making the choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If n is less than equal to 1, then return n.
- If the current subproblem is already computed then return it instead of recomputing them.

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo array and initialize with base cases.
- Each state in the memo represents the ith fibonacci number.
- For each index, the fibonacci is the sum of the previous two fibonacci.
- Use the memo to get the solutions to the smaller sub-problems.
- Return the last element of the memo which contains the nth fibonacci.

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

const fib = (n, memo) => {
    if (n <= 1) {
        return n;
    }

    if (memo[n] != -1) {
        return memo[n];
    }

    const first = fib(n - 1, memo);
    const second = fib(n - 2, memo);
    memo[n] = first + second;
    return memo[n];
};

const solve = function (n) {
    const memo = new Array(n + 1).fill(-1);
    return fib(n, memo);
};

/* Bottom up */

const solve2 = function (n) {
    const memo = new Array(n + 1).fill(-1);
    memo[0] = 0;
    memo[1] = 1;

    for (let i = 2; i < memo.length; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }

    return memo[n];
};

/* Bottom up (2 elements) */

const solve3 = function (n) {
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