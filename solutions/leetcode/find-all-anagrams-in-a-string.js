/*

Problem

https://leetcode.com/problems/find-all-anagrams-in-a-string/

Approach

1. Brute force
- Traverse all the substrings of length equal to string 2 which is an anagram and push it's starting index into the result.

Time - O(n^2)
Space - O(1)

2. Sliding window
- Use two pointers i,j to represent the window.
- Include the current element in the window.
- If the condition is valid, update the result and shrink the window.
- Expand the window.

Time - O(n+m)
Space - O(1)

n - size of string 1
m - size of string 2

*/

/* Brute force */

const isAnagram = (sCount, pCount) => {
    for (let i = 0; i < sCount.length; i++) {
        if (sCount[i] != pCount[i]) {
            return false;
        }
    }
    return true;
};

const findAnagrams = function (s, p) {
    const result = [], pCount = new Array(26).fill(0);
    for (let i = 0; i < p.length; i++) {
        const id = p.charCodeAt(i) - 97;
        pCount[id] += 1;
    }
    for (let i = 0; i < s.length; i++) {
        const sCount = new Array(26).fill(0);
        for (let j = i; j < s.length; j++) {
            const id = s.charCodeAt(j) - 97;
            sCount[id] += 1;
            if (j - i + 1 === p.length && isAnagram(sCount, pCount)) {
                result.push(i);
            }
        }
    }
    return result;
};

/* Sliding window */

const isAnagram2 = (sCount, pCount) => {
    for (let i = 0; i < sCount.length; i++) {
        if (sCount[i] != pCount[i]) {
            return false;
        }
    }
    return true;
};

const findAnagrams2 = function (s, p) {
    const result = [], pCount = new Array(26).fill(0), sCount = new Array(26).fill(0);
    for (let i = 0; i < p.length; i++) {
        const id = p.charCodeAt(i) - 97;
        pCount[id] += 1;
    }
    let i = 0, j = 0;
    while (j < s.length) {
        const id = s.charCodeAt(j) - 97;
        sCount[id] += 1;
        if (j - i + 1 === p.length) {
            if (isAnagram2(sCount, pCount)) {
                result.push(i);
            }
            const id = s.charCodeAt(i) - 97;
            if (sCount[id] > 0) {
                sCount[id] -= 1;
            }
            i++;
        }
        j++;
    }
    return result;
};