/*

Problem

https://leetcode.com/problems/string-compression/

Approach
- Initialize ith pointer as 0 and count as 1.
- Traverse the array.
- If the current character is equal to the next character, then increment the count.
- Else set the ith character as jth character, increment i, set the count of the character and reset the count to 1.
- Return the ith pointer.

Time - O(n)
Space - O(n)

n - number of elements

*/

const compress = function (chars) {
    let i = 0, count = 1;
    for (let j = 0; j < chars.length; j++) {
        if (j + 1 < chars.length && chars[j] === chars[j + 1]) {
            count++;
        }
        else {
            chars[i] = chars[j];
            i++;
            if (count > 1) {
                const s = count.toString();
                for (let k = 0; k < s.length; k++) {
                    chars[i] = s[k];
                    i++;
                }
            }
            count = 1;
        }
    }
    return i;
};