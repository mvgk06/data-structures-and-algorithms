/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-subsequence-official/ojquestion

Approach

1. Recursion
- Recursively get the subseqences of smaller sub problem.
- Create a result array where we either pick or don't pick the current element along with the computed subsequences.
- Return the result array.
- If the size becomes equal to 0, then return an array with empty string.

Time - O(2^n*n)
Space - O(2^n)

2. Backtracking
- For each index we have two choices either we pick or don't pick the current element.
- Recursively solve the smaller sub problems.
- If the index becomes equal to the length of the string, then push the current subsequence into the result and return.

Time - O(2^n)
Space - O(2^n)

n - size of the string

*/

/* Recursion */

const getSubsequence = (s, n) => {
    if (n === 0) {
        const curr = [""];
        return curr;
    }
    const curr = getSubsequence(s, n - 1);
    const result = [];
    for (let i = 0; i < curr.length; i++) {
        result.push(curr[i] + s[n - 1]);
        result.push(curr[i] + "");
    }
    return result;
};

const solve = (s) => {
    const result = getSubsequence(s, s.length);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};

/* Backtracking */

const getSubsequence2 = (s, index, curr, result) => {
    if (index === s.length) {
        result.push(curr);
        return;
    }
    getSubsequence2(s, index + 1, curr + s[index], result);
    getSubsequence2(s, index + 1, curr, result);
    return;
};

const solve2 = (s) => {
    const curr = "", result = [];
    getSubsequence2(s, 0, curr, result);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};