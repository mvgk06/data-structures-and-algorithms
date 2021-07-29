/*

Problem

https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/

Approach

1. Brute force
- For each number in the range [l,r] if it does not exist in any one of the interval then return false.
- Else return true.

Time - O((r-l+1)*n)
Space - O(1)

2. Prefix Sum
- Create a prefix array, mark each interval and compute the prefix sum.
- Now each prefix[i] gives the number of times that i occurred in the given intervals.
- If any one of the prefix[i] is 0 where i is in the range [l,r] then return false.
- Else return true.

Time - O(n)
Space - O(n)

l - left value of the range
r - right value of the range
n - number of elements

*/

/* Brute force */

const isCovered = function (ranges, left, right) {
    for (let num = left; num <= right; num++) {
        let exists = false;
        for (let i = 0; i < ranges.length; i++) {
            if (num >= ranges[i][0] && num <= ranges[i][1]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            return false;
        }
    }
    return true;
};

/* Prefix Sum */

const isCovered2 = function (ranges, left, right) {
    const prefix = new Array(51).fill(0);
    for (let i = 0; i < ranges.length; i++) {
        prefix[ranges[i][0]] += 1;
        prefix[ranges[i][1] + 1] -= 1;
    }
    for (let i = 1; i < prefix.length; i++) {
        prefix[i] += prefix[i - 1];
    }
    for (let i = left; i <= right; i++) {
        if (prefix[i] === 0) {
            return false;
        }
    }
    return true;
};