/*

Problem

https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/

Approach
- Store the occurrences of each character in each string from the input in a map.
- Traverse the map and if the occurrence of any of the character is not divisible by the length of the input, then return false.
- Else return true.

Time - O(n*m)
Space - O(1)

n - number of elements
m - maximum length of each string

*/

const makeEqual = function (words) {
    const map = new Map();
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            const ch = words[i][j];
            if (map.has(ch)) {
                map.set(ch, map.get(ch) + 1);
            }
            else {
                map.set(ch, 1);
            }
        }
    }
    for (const key of map.keys()) {
        if (map.get(key) % words.length != 0) {
            return false;
        }
    }
    return true;
};