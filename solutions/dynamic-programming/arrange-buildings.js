/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/arrange-buildings-official/ojquestion

Approach

1. Top down
- Each state in the memo[i][j] represents the number of ways to arrange buildings of length i with no consecutive buildings that ends with the j.
- Here j===0 is space and j===1 is building.
- At each index, we have two choices if the ending is 0, then we can use the solution of the smaller subproblem the ends with 0 and 1.
- Else we can use the solution of the smaller subproblem that ends with 0.
- After making a choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If n becomes less than equal to 1, then return it.
- If the current subproblem is already computed, then return it instead of recomputing them.

Time - O(n)
Space - O(n)

2. Bottom up
- Create a memo and initialize the base cases.
- Each state in the memo[i][j] represents the number of ways to arrange buildings of length i with no consecutive buildings that ends with the j.
- Here j===0 is space and j===1 is building.
- At each index, we have two choices if the ending is 0, then we can use the solution of the smaller subproblem the ends with 0 and 1.
- Else we can use the solution of the smaller subproblem that ends with 0.
- Use the memo to get solutions for smaller sub-problems.
- Return the sum of the last two elements which gives the solution for the main problem. 

Time - O(n)
Space - O(n)

n - length of the road

*/

/* Top down */

const arrangeBuildings = (n, end, memo) => {
    if (n <= 1) {
        return n;
    }
    if (memo[n][end] != -1) {
        return memo[n][end];
    }
    if (end === 0) {
        const c1 = arrangeBuildings(n - 1, 0, memo);
        const c2 = arrangeBuildings(n - 1, 1, memo);
        memo[n][end] = c1 + c2;
    }
    else {
        const c1 = arrangeBuildings(n - 1, 0, memo);
        memo[n][end] = c1;
    }
    return memo[n][end];
};

const solve = (n) => {
    const memo = new Array(n + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(2).fill(-1);
    }
    const result = (arrangeBuildings(n, 0, memo) + arrangeBuildings(n, 1, memo));
    const finalResult = BigInt(result) * BigInt(result);
    console.log(finalResult.toString(10));
};

/* Bottom up */

const solve2 = (n) => {
    const memo = new Array(n + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(2);
    }

    for (let i = 0; i < memo.length; i++) {
        for (let j = 0; j < memo[i].length; j++) {
            if (i <= 1) {
                memo[i][j] = i;
            }
            else if (j === 0) {
                memo[i][j] = memo[i - 1][j] + memo[i - 1][j + 1];
            }
            else {
                memo[i][j] = memo[i - 1][j - 1];
            }
        }
    }

    const result = memo[n][0] + memo[n][1];
    const finalResult = BigInt(result) * BigInt(result);
    console.log(finalResult.toString(10));
};
