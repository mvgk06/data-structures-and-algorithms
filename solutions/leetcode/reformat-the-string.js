/*

Problem

https://leetcode.com/problems/reformat-the-string/

Approach
- Build two strings where one contains letters and the other contains digits.
- If the absolute difference between the length of the two strings is at most 1, then start alternating from the bigger string and return the result.
- Else return an empty string.

Time - O(n)
Space - O(n)

n - size of the string

*/

const isChar = (ch) => {
    const code = ch.charCodeAt(0);
    return (code >= 97 && code <= 122);
};

const reformat = function (s) {
    let letters = "", digits = "";
    for (let i = 0; i < s.length; i++) {
        if (isChar(s[i])) {
            letters += s[i];
        }
        else {
            digits += s[i];
        }
    }
    let result = "";
    if (Math.abs(letters.length - digits.length) <= 1) {
        let i = 0, j = 0;
        const isLettersMore = letters.length > digits.length;
        while (i < letters.length && j < digits.length) {
            if (isLettersMore) {
                result += letters[i];
                i++;
                result += digits[j];
                j++;
            }
            else {
                result += digits[j];
                j++;
                result += letters[i];
                i++;
            }
        }
        if (i != letters.length) {
            result += letters[i];
        }
        if (j != digits.length) {
            result += digits[j];
        }
    }
    return result;
};