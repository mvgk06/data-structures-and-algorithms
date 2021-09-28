/*

Problem

https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/

Approach
- Set the prefix as first string, if the prefix is equal to the given string, then return true.
- Else traverse the array and build the prefix, if the current prefix is equal to the given string, then return true.
- If no prefix matched, then return false.

Time - O(n)
Space - O(n)

n - number of strings

*/

const isPrefixString = function (s, words) {
    const prefix = new Array(s.length);
    prefix[0] = words[0];
    if (prefix[0] === s) {
        return true;
    }
    for (let i = 1; i < words.length; i++) {
        prefix[i] = prefix[i - 1] + words[i];
        if (prefix[i] === s) {
            return true;
        }
    }
    return false;
};