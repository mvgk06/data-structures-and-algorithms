/*

Problem

https://leetcode.com/problems/letter-combinations-of-a-phone-number/

Approach

1. Recursive
- For each digit, we have at most 4 choices where we can pick any of the characters that maps to that digit.
- Recursively solve the smaller sub problems.
- Backtrack, undo the choice that was made and continue with other choices.
- If the end of the digits is reached, then add the current combination to the result and return.

Time - O(4^n)
Space - O(n)

2. Iterative
- For each digit, traverse the result and add the current character that maps to the digit with that of the current element in the result.
- Update the result by copying the contents of current combinations.

Time - O(4^n)
Space - O(1)

n - number of digits

*/

/* Recursive */

const letterCombinationsHelper = (digits, map, result, index, curr) => {
    if (index === digits.length) {
        result.push(curr);
        return;
    }

    const string = map[digits[index]];
    for (let i = 0; i < string.length; i++) {
        letterCombinationsHelper(digits, map, result, index + 1, curr + string[i]);
    }
};

const letterCombinations = function (digits) {
    if (digits.length === 0) {
        return [];
    }
    const map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    const result = [], curr = "";
    letterCombinationsHelper(digits, map, result, 0, curr);
    return result;
};


/* Iterative */

const letterCombinations2 = function (digits) {
    if (digits.length === 0) {
        return [];
    }
    const map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    let result = [""];
    for (let i = 0; i < digits.length; i++) {
        const str = map[digits[i]], curr = [];
        for (let j = 0; j < result.length; j++) {
            for (let k = 0; k < str.length; k++) {
                curr.push(result[j] + str[k]);
            }
        }
        result = [...curr];
    }
    return result;
};