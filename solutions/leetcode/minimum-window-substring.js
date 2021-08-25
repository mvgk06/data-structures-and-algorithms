/*

Problem

https://leetcode.com/problems/minimum-window-substring/

Approach

1. Brute force
- Traverse all the substrings that satisfies the condition and compute the smallest substring.

Time - O(n^3)
Space - O(n+m)

2. Sliding window
- Use two pointers i,j to represent the window.
- Include the current element in the window.
- Shrink the window as long as the condition is valid and update the result.
- Expand the window.

Time - O(n+m)
Space - O(n+m)

n - size of string 1
m - size of string 2

*/

/* Brute force */

const isValid = (sMap, tMap) => {
    for (const key of tMap.keys()) {
        if (!sMap.get(key) || tMap.get(key) > sMap.get(key)) {
            return false;
        }
    }
    return true;
};

const minWindow = function (s, t) {
    const tMap = new Map();
    for (let i = 0; i < t.length; i++) {
        if (tMap.has(t[i])) {
            tMap.set(t[i], tMap.get(t[i]) + 1);
        }
        else {
            tMap.set(t[i], 1);
        }
    }
    const sMap = new Map();
    let result = "", size = Number.MAX_VALUE;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (sMap.has(s[j])) {
                sMap.set(s[j], sMap.get(s[j]) + 1);
            }
            else {
                sMap.set(s[j], 1);
            }
            if (j - i + 1 >= t.length && j - i + 1 <= size && isValid(sMap, tMap)) {
                size = j - i + 1;
                result = s.substring(i, j + 1);
            }
        }
        sMap.clear();
    }
    return result;
};

/* Sliding window */

const isValid2 = (sMap, tMap) => {
    for (const key of tMap.keys()) {
        if (!sMap.get(key) || tMap.get(key) > sMap.get(key)) {
            return false;
        }
    }
    return true;
};

const minWindow = function (s, t) {
    const tMap = new Map();
    for (let i = 0; i < t.length; i++) {
        if (tMap.has(t[i])) {
            tMap.set(t[i], tMap.get(t[i]) + 1);
        }
        else {
            tMap.set(t[i], 1);
        }
    }
    const sMap = new Map();
    let i = 0, j = 0, result = "", size = Number.MAX_VALUE;
    while (j < s.length) {
        if (sMap.has(s[j])) {
            sMap.set(s[j], sMap.get(s[j]) + 1);
        }
        else {
            sMap.set(s[j], 1);
        }
        while (i < s.length && j - i + 1 >= t.length && isValid2(sMap, tMap)) {
            if (j - i + 1 <= size) {
                size = j - i + 1;
                result = s.substring(i, j + 1);
            }
            if (sMap.has(s[i])) {
                const count = sMap.get(s[i]);
                if (count === 1) {
                    sMap.delete(s[i]);
                }
                else {
                    sMap.set(s[i], count - 1);
                }
            }
            i++;
        }
        j++;
    }
    return result;
};