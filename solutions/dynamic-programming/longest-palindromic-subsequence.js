/*

Problem
https://leetcode.com/problems/longest-palindromic-subsequence/

Approach

1. Top down
- Use the given string as s1 and use the reverse of s1 as s2.
- The length of the longest palindromic subsequence is equal to the length of longest common subseqeuence of s1 and s2.
- Find the length of the longest common subseqeuence for s1 and s2 using top-down approach.

Time - O(n^2)
Space - O(n^2)

2. Bottom up
- Use the given string as s1 and use the reverse of s1 as s2.
- The length of the longest palindromic subsequence is equal to the length of longest common subseqeuence of s1 and s2.
- Find the longest common subseqeuence of s1 and s2 using bottom-up approach.

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
        const choice1 = longestPalindromeSubsequenceHelper(s1, s2, i + 1, j, memo);
        const choice2 = longestPalindromeSubsequenceHelper(s1, s2, i, j + 1, memo);
        memo[i][j] = Math.max(choice1, choice2);
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