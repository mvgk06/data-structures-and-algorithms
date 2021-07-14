/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/count-encodings-official/ojquestion

https://leetcode.com/problems/decode-ways/

Approach

1. Top down
- Each state in the memo[i] represents the count of encodings if characters up to the ith index is used.
- At each index, we can either encode the current or previous or both characters.
- After making a choice, recursively solve the smaller sub-problems and store the solution in the memo.
- If the index is 0 if we can encode it return 1 else 0.
- If the index is less than 0, then return 1.
- If the current subproblem is already computed, then return it instead of recomputing.

Time - O(n)
Space - O(n)

2. Bottom up
- Each state in the memo[i] represents the count of encodings if characters up to ith index are used.
- At each index, we can either encode the current or previous or both characters.
- Use the memo to get the solutions for smaller sub-problems.
- Return the last element which is the solution for the main problem.

Time - O(n)
Space - O(n)

n - size of string

*/

/* Top down */

const countEncodings = (s, i, memo) => {
    if (i === 0) {
        if (s[i] != "0") {
            memo[i] = 1;
        }
        else {
            memo[i] = 0;
        }
        return memo[i];
    }
    if (i < 0) {
        return 1;
    }
    if (memo[i] != -1) {
        return memo[i];
    }
    let result = 0;
    if (s[i] != "0" && s[i - 1] != "0") {
        if (parseInt(s[i - 1] + s[i]) <= 26) {
            result = countEncodings(s, i - 1, memo) + countEncodings(s, i - 2, memo);
        }
        else {
            result = countEncodings(s, i - 1, memo);
        }
    }
    else if (s[i] != "0" && s[i - 1] === "0") {
        result = countEncodings(s, i - 1, memo);
    }
    else if (s[i] === "0" && s[i - 1] != "0") {
        if (s[i - 1] === "1" || s[i - 1] === "2") {
            result = countEncodings(s, i - 2, memo);
        }
    }
    memo[i] = result;
    return memo[i];
};

const solve = function (s) {
    const memo = new Array(s.length).fill(-1);
    const result = countEncodings(s, s.length - 1, memo);
    console.log(result);
};

/* Bottom up */

const solve2 = function (s) {
    const memo = new Array(s.length).fill(0);
    for (let i = 0; i < memo.length; i++) {
        if (i === 0) {
            memo[i] = 1;
        }
        else if (s[i] != "0" && s[i - 1] != "0") {
            if (parseInt(s[i - 1] + s[i]) <= 26) {
                memo[i] = memo[i - 1] + (i - 2 >= 0 ? memo[i - 2] : 1);
            }
            else {
                memo[i] = memo[i - 1];
            }
        }
        else if (s[i] != "0" && s[i - 1] === "0") {
            memo[i] = memo[i - 1];
        }
        else if (s[i] === "0" && s[i - 1] != "0") {
            if (s[i - 1] === "1" || s[i - 1] === "2") {
                memo[i] = (i - 2 >= 0 ? memo[i - 2] : 1);
            }
        }
    }
    const result = memo[s.length - 1];
    console.log(result);
};