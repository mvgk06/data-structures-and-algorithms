/*

Problem
https://leetcode.com/problems/delete-operation-for-two-strings/

Approach

1. Top down
- Find the length of the LCS using top down approach.
- The number of operations are (m-LCS)+(n-LCS).

Time - O(n*m)
Space - O(n*m)

2. Bottom up
- Find the length of the LCS using bottom up approach.
- The number of operations are (m-LCS)+(n-LCS).

Time - O(n*m)
Space - O(n*m)

n - size of string 1 
m - size of string 2

*/

/* Top down */

const minDistanceHelper = (s1, s2, i, j, memo) => {
    if (i === s1.length || j === s2.length) {
        return 0;
    }
    if (memo[i][j] != -1) {
        return memo[i][j];
    }
    if (s1[i] === s2[j]) {
        memo[i][j] = 1 + minDistanceHelper(s1, s2, i + 1, j + 1, memo);
    }
    else {
        const choice1 = minDistanceHelper(s1, s2, i + 1, j, memo);
        const choice2 = minDistanceHelper(s1, s2, i, j + 1, memo);
        memo[i][j] = Math.max(choice1, choice2);
    }
    return memo[i][j];
};

const minDistance = function (s1, s2) {
    const memo = new Array(s1.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(s2.length).fill(-1);
    }
    const result = minDistanceHelper(s1, s2, 0, 0, memo);
    return (s1.length - result) + (s2.length - result);
};

/* Bottom up */

const minDistance = function (s1, s2) {
    const memo = new Array(s1.length + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(s2.length + 1).fill(0);
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

    const result = memo[s1.length][s2.length];
    return (s1.length - result) + (s2.length - result);
};