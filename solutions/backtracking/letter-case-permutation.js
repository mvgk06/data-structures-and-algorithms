/*

Backtracking

Time - O(2^n)
Space - O(1)

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