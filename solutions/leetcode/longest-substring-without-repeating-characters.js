/*

Problem

https://leetcode.com/problems/longest-substring-without-repeating-characters/

Approach

1. Brute force
- Traverse all the substrings that has unique characters and compute the length of the longest substring.

Time - O(n^2)
Space - O(n)

2. Sliding window
- Use two pointers i,j to represent the window.
- Shrink the window until the window contains unique characters.
- Add the current element into the window.
- Update the result and expand the window.

Time - O(n)
Space - O(n)

n - size of the string

*/

/* Brute force */

const lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (set.has(s[j])) {
                break;
            }
            else {
                set.add(s[j]);
                result = Math.max(result, j - i + 1);
            }
        }
        set.clear();
    }
    return result;
};

/* Sliding window */

const lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let i = 0, j = 0, result = 0;
    while (j < s.length) {
        while (i < s.length && set.has(s[j])) {
            if (set.has(s[i])) {
                set.delete(s[i]);
            }
            i++;
        }
        set.add(s[j]);
        result = Math.max(result, j - i + 1);
        j++;
    }
    return result;
};