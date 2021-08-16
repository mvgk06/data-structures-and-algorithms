/*

Problem

https://leetcode.com/problems/base-7/

Approach
- Divide the number by 7 until it becomes zero and keep track of the remainders.
- Return the reaminders as a string in the reverse order.

Time - O(d)
Space - O(1)

d - number of digits

*/

const convertToBase7 = function (num) {
    if (num === 0) {
        return num.toString();
    }
    let n = Math.abs(num), digits = [];
    while (n != 0) {
        digits.push(n % 7);
        n = Math.floor(n / 7);
    }
    const result = digits.reverse().join("");
    if (num < 0) {
        return "-" + result;
    }
    return result;
};