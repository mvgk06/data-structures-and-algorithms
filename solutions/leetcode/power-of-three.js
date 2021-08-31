/*

Problem

https://leetcode.com/problems/power-of-three/

Approach

1. Division
- If the number is less than or equal to 0, then return false.
- Divide the number as long as it is divisible by 3.
- If the number is equal to 1, then return true.
- Else return false.

Time - O(logn)
Space - O(1)

2. Log
- If the number is less than or equal to 0, then return false.
- Take log to compute the exponent.
- If the number is equal to 3 to the power of the exponent, then return true.
- Else return false.

Time - O(logn)
Space - O(1)

n - number

*/

/* Division */

const isPowerOfThree = function (n) {
    if (n <= 0) {
        return false;
    }
    while (n % 3 === 0) {
        n = n / 3;
    }
    return n === 1;
};

/* Log */

const isPowerOfThree2 = function (n) {
    if (n <= 0) {
        return false;
    }
    const x = Math.floor(Math.log(n) / Math.log(3));
    return n === Math.pow(3, x);
};