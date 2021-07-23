/*

Problem

https://leetcode.com/problems/first-unique-character-in-a-string/

Approach
- Store the occurences of characters in a count array.
- Traverse the count array and if the current character occured only once then return the current index.
- Else return -1.

Time - O(n)
Space - O(1)

n - number of elements

*/

const firstUniqChar = function (s) {
    const count = new Array(26 + 1).fill(0), code = 96;
    for (let i = 0; i < s.length; i++) {
        const index = s[i].charCodeAt(0) - code;
        count[index] += 1;
    }
    for (let i = 0; i < s.length; i++) {
        const index = s[i].charCodeAt(0) - code;
        if (count[index] === 1) {
            return i;
        }
    }
    return -1;
};