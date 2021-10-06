/*

Problem

https://leetcode.com/problems/letter-case-permutation/

Approach
- If the current element is a character, then we have two choices either we can pick the current character in lowercase or in uppercase.
- Else we have only one choice that is to pick the current element as it is.
- After making a choice, recursively solve for the smaller sub problems.
- Backtrack, undo the choice that was made (this will be taken care by recursion as strings are passed by value) and try other choices.
- If the end of the string is reached, store the current possible string in the result and return.

Time - O(2^n)
Space - O(n)

n - size of string

*/

const helper = (string, i, curr, result) => {
    if (i === string.length) {
        result.push(curr);
        return;
    }
    const char = string.charAt(i), charCode = string.charCodeAt(i);
    if ((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)) {
        helper(string, i + 1, curr + char.toLowerCase(), result);
        helper(string, i + 1, curr + char.toUpperCase(), result);
    }
    else {
        helper(string, i + 1, curr + char, result);
    }
    return;
};

const letterCasePermutation = function (s) {
    const result = [];
    helper(s, 0, "", result);
    return result;
};