/*

Problem

https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

Approach
- Store the occurrences of each character in a count array.
- Traverse the count array, if the occurrence of the character is not 0 and it is not equal to the maximum occurrence, then return false.
- Else return true.

Time - O(n)
Space - O(1)

n - size of the string

*/

const areOccurrencesEqual = function (s) {
    const count = new Array(27).fill(0);
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - 97;
        count[index] += 1;
        max = Math.max(max, count[index]);
    }
    for (const val of count) {
        if (val != 0 && val != max) {
            return false;
        }
    }
    return true;
};