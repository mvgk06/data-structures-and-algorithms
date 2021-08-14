/*

Problem

https://leetcode.com/problems/student-attendance-record-i/

Approach
- Keep track of count of "A" and count of consecutive "L".
- If the count of "A" exceeds 2 or count of "L" exceeds 3, then return false.
- Else return true.

Time - O(n)
Space - O(1)

n - length of string

*/

const checkRecord = function (s) {
    let aCount = 0, lCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            aCount++;
        }
        if (s[i] === "L") {
            lCount++;
        }
        else {
            lCount = 0;
        }
        if (aCount >= 2 || lCount >= 3) {
            return false;
        }
    }
    return true;
};