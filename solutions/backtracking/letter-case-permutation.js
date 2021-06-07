/*

Problem
https://leetcode.com/problems/letter-case-permutation/

Approach
- If the current element is a character then I have two choices I can pick the current character in lowercase or in uppercase.
- Else I have only one choice that is to pick the current element as it is.
- After making a choice, recursively solve the smaller sub problems.
- Backtrack, undo the choice that was made (this will be taken care by recursion as strings are primitive) and try other choices.
- If the end of the string is reached then there are no more choices to make so store the current possible string in the result.

Time - O(2^n)
Space - O(n)

*/

const findAllPossibleStrings = (string, result, currIndex, transformedString) => {

    if (currIndex === string.length) {
        result.push(transformedString);
        return;
    }

    const currChar = string.charAt(currIndex), currCharCode = string.charCodeAt(currIndex);
    if ((currCharCode >= 97 && currCharCode <= 122) || (currCharCode >= 65 && currCharCode <= 90)) {
        findAllPossibleStrings(string, result, currIndex + 1, transformedString + currChar.toLowerCase());
        findAllPossibleStrings(string, result, currIndex + 1, transformedString + currChar.toUpperCase());
    }
    else {
        findAllPossibleStrings(string, result, currIndex + 1, transformedString + currChar);
    }

    return;
};

const letterCasePermutation = function (s) {
    const result = [];
    findAllPossibleStrings(s, result, 0, "");
    return result;
};