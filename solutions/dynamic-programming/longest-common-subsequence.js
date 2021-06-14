/* 

Problem
https://leetcode.com/problems/longest-common-subsequence/

Approach

1. Top down
- For each index if the current character in both the strings are equal then I have only one choice that is to move both the ith and jth pointer.
- Else I have two choices either I can move the ith or jth pointer.
- Recursively solve the smaller sub problems and store the solution in an array.
- If ith or jth pointer reaches the end of the string then return 0 to indicate that no longest subsequence exist.
- If the current sub problem is already computed then return it instead of computing them again.

Time - O(n*m)
Space - O(n*m)

2. Bottom up
- Create a memo array and initialise with base cases.
- For each index if the current character in both the strings are equal then I have only one choice that is to move both the ith and jth pointer.
- Else I have two choices either I can move the ith or jth pointer.
- Use the memo to get the solutions of smaller sub problems.
- Return the cell (n,m) which contains the solution for the main problem.

Time - O(n*m)
Space - O(n*m)

*/

/* Top down */

const longestCommonSubsequenceHelper = (s1, s2, i, j, memo) => {
    if (i === s1.length || j === s2.length) {
        return 0;
    }

    if (memo[i][j] != -1) {
        return memo[i][j];
    }

    if (s1[i] === s2[j]) {
        memo[i][j] = 1 + longestCommonSubsequenceHelper(s1, s2, i + 1, j + 1, memo);
        return memo[i][j];
    }

    const reduceS1 = longestCommonSubsequenceHelper(s1, s2, i + 1, j, memo);
    const reduceS2 = longestCommonSubsequenceHelper(s1, s2, i, j + 1, memo);
    memo[i][j] = Math.max(reduceS1, reduceS2);
    return memo[i][j];
};

const longestCommonSubsequence = function (s1, s2) {
    const memo = new Array(s1.length + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(s2.length + 1).fill(-1);
    }

    return longestCommonSubsequenceHelper(s1, s2, 0, 0, memo);
};

/* Bottom up */

const longestCommonSubsequence2 = function (s1, s2) {
    const memo = new Array(s1.length + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(s2.length + 1).fill(-1);
    }

    for (let j = 0; j < memo[0].length; j++) {
        memo[0][j] = 0;
    }

    for (let i = 0; i < memo.length; i++) {
        memo[i][0] = 0;
    }

    for (let i = 1; i < memo.length; i++) {
        for (let j = 1; j < memo[i].length; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                memo[i][j] = 1 + memo[i - 1][j - 1];
            }
            else {
                memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
            }
        }
    }

    return memo[s1.length][s2.length];
};