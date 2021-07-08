/*

Problem (follow up)
https://leetcode.com/problems/shortest-common-supersequence/

Approach

- Find the length of the longest common subseqeuence (LCS) using bottom-up approach.
- The length of the shortest common supersequence is (m-LCS)+(n-LCS)+LCS which is m+n-LCS.

Time - O(n*m)
Space - O(n*m)

n - size of string 1
m - size of string 2

*/

const shortestCommonSupersequenceLength = (s1, s2) => {
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

    return s1.length + s2.length - memo[s1.length][s2.length];
};