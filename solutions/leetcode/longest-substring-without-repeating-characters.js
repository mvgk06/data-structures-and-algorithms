/*

Problem

https://leetcode.com/problems/longest-substring-without-repeating-characters/

Approach

1. Brute force
- Traverse all the substrings that has unique characters and compute the length of the longest substring.

Time - O(n^2)
Space - O(n)

2. Sliding window
- The window is valid when it contains unique elements.
- Use two pointers start, end to represent the start and the end of the window.
- Use a set to check if the window is valid or not.
- Shrink the window as long as it is invalid and update the set.
- Include the current element in the set and update the result.
- Expand the window.

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
    let start = 0, end = 0, result = 0;
    while (end < s.length) {
        while (start < s.length && set.has(s[end])) {
            if (set.has(s[start])) {
                set.delete(s[start]);
            }
            start++;
        }
        set.add(s[end]);
        result = Math.max(result, end - start + 1);
        end++;
    }
    return result;
};