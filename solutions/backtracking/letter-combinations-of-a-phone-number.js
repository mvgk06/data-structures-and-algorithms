/*

Problem
https://leetcode.com/problems/letter-combinations-of-a-phone-number/

Approach
- For each digit, I have at most 4 choices I can pick any of the characters that maps to that digit.
- Recursively solve the smaller sub problem.
- Backtracking, undo the choice that was made (recursion will take care of this as strings are primitives) and continue with other choices.
- If the end of the digits is reached then add the current combination to the result and return.

Time - O(4^n)
Space - O(n+k)

n - number of digits
k - number of combinations

*/

const letterCombinationsHelper = (digits, map, result, index, combination) => {
    if (index === digits.length) {
        result.push(combination);
        return;
    }

    const string = map[digits[index]];
    for (let i = 0; i < string.length; i++) {
        letterCombinationsHelper(digits, map, result, index + 1, combination + string[i]);
    }

    return;
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

    const result = [], combination = "";
    letterCombinationsHelper(digits, map, result, 0, combination);
    return result;
};
