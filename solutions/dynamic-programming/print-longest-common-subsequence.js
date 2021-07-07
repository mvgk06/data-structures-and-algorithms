/*

Problem (follow up)
https://leetcode.com/problems/longest-common-subsequence/

Approach

- Find the length of the LCS using the bottom-up approach.
- Traverse the memo from the bottom and find the choices that were made.

Time - O(n*m)
Space - O(n*m)

n - size of string 1
m - size of string 2

*/

const printLongestCommonSubsequence = function (s1, s2) {
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

    let i = s1.length, j = s2.length;
    const choices = [];

    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
            choices.push(s1[i - 1]);
            i -= 1;
            j -= 1;
        }
        else {
            if (memo[i - 1][j] > memo[i][j - 1]) {
                i -= 1;
            }
            else {
                j -= 1;
            }
        }
    }

    return choices.reverse();

};