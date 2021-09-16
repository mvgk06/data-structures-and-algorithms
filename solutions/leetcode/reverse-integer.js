/*

Problem

https://leetcode.com/problems/reverse-integer/

Approach
- Reverse the given number digit by digit from backwards.
- If the current reversed number is greater than or equal to max/10 and the current last digit is not zero, then overflow will occur so return 0.
- Else continue reversing the digits.
- Return the reversed number with the sign.

Time - O(d)
Space - O(1)

d - number of digits

*/

const reverse = function (x) {
    const max = Math.pow(2, 31);
    let n = Math.abs(x), rev = 0;
    while (n != 0) {
        if (rev >= max / 10 && n % 10 != 0) {
            return 0;
        }
        rev *= 10;
        rev += n % 10;
        n = Math.floor(n / 10);
    }
    return x < 0 ? -rev : rev;
};