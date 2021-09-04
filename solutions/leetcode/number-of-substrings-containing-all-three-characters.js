/*

Problem

https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

Approach

1. Brute force
- Traverse all the substrings and increment the result if it contains all three characters.

Time - O(n^2)
Space - O(1)

2. Sliding window
- The window is valid if it contains all three characters.
- Use two pointers start, end to represent the start and the end of the window.
- Use a map to check if the window is valid or not.
- Include the current element in the map.
- Shrink the window as long as it is valid, update the result and the map.
- Expand the window.

Time - O(n)
Space - O(1)

n - size of the string

*/

/* Brute force */

const numberOfSubstrings = function (s) {
    const map = new Map();
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (map.has(s[j])) {
                map.set(s[j], map.get(s[j]) + 1);
            }
            else {
                map.set(s[j], 1);
            }
            if (map.size === 3) {
                result++;
            }
        }
        map.clear();
    }
    return result;
};

/* Sliding window */

const numberOfSubstrings2 = function (s) {
    const map = new Map();
    let start = 0, end = 0, result = 0;
    while (end < s.length) {
        if (map.has(s[end])) {
            map.set(s[end], map.get(s[end]) + 1);
        }
        else {
            map.set(s[end], 1);
        }
        while (start < s.length && map.size === 3) {
            result += s.length - end;
            map.set(s[start], map.get(s[start]) - 1);
            if (map.get(s[start]) === 0) {
                map.delete(s[start]);
            }
            start++;
        }
        end++;
    }
    return result;
};