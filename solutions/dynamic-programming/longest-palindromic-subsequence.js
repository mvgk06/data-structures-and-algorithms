/*

Problem
https://leetcode.com/problems/longest-palindromic-subsequence/

Approach

1. Top down
- Use the given string as s1 and use the reverse of s1 as s2.
- Use two pointers to compare each character of both the strings.
- For each index, if the current character in both the strings is equal then move both the pointers else either one of the two pointers.
- After making the choice, recursively solve the smaller sub-problems and store the solution in an array.
- If any one of the pointers reaches the end of the string then return 0 to indicate that no longest palindromic subsequence exists.
- If the current subproblem is already computed, then return it instead of computing them again.

Time - O(n^2)
Space - O(n^2)

2. Bottom up
- Use the given string as s1 and use the reverse of s1 as s2.
- Create a memo array and initialize with base cases.
- For each index, if the current character in both the strings is equal then move both the pointers else either one of the two pointers.
- Use the memo to get the solutions of smaller sub-problems.
- Return the cell (n, n) which contains the solution for the main problem.

Time - O(n^2)
Space - O(n^2)

n - size of string

*/

/* Top down */

const longestPalindromeSubsequenceHelper = (s1, s2, i, j, memo) => {

    if (i === s1.length || j === s2.length) {
        return 0;
    }

    if (memo[i][j] != -1) {
        return memo[i][j];
    }

    if (s1[i] === s2[j]) {
        memo[i][j] = 1 + longestPalindromeSubsequenceHelper(s1, s2, i + 1, j + 1, memo);
    }
    else {
        const reduceS1 = longestPalindromeSubsequenceHelper(s1, s2, i + 1, j, memo);
        const reduceS2 = longestPalindromeSubsequenceHelper(s1, s2, i, j + 1, memo);
        memo[i][j] = Math.max(reduceS1, reduceS2);
    }

    return memo[i][j];

};

const longestPalindromeSubseq = function (s) {

    const memo = new Array(s.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(s.length).fill(-1);
    }

    let s2 = "";
    for (let i = s.length - 1; i >= 0; i--) {
        s2 += s.charAt(i);
    }
    return longestPalindromeSubsequenceHelper(s, s2, 0, 0, memo);
};

/* Bottom up */

const longestPalindromeSubseq2 = function (s) {

    const memo = new Array(s.length + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(s.length + 1).fill(-1);
    }

    let s2 = "";
    for (let i = s.length - 1; i >= 0; i--) {
        s2 += s.charAt(i);
    }

    for (let j = 0; j < memo[0].length; j++) {
        memo[0][j] = 0;
    }

    for (let i = 0; i < memo.length; i++) {
        memo[i][0] = 0;
    }

    for (let i = 1; i < memo.length; i++) {
        for (let j = 1; j < memo[i].length; j++) {
            if (s[i - 1] === s2[j - 1]) {
                memo[i][j] = 1 + memo[i - 1][j - 1];
            }
            else {
                memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
            }
        }
    }

    return memo[s.length][s.length];
};