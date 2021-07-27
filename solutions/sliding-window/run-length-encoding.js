/*

Problem

https://binarysearch.com/problems/Run-Length-Encoding

Approach
- Initialize count as 1 and result as empty string.
- Traverse the array.
- If the current character is equal to the next character, then increment the count.
- Else update the result and reset the count to 1.
- Return the result.

Time - O(n)
Space - O(1)

n - number of elements

*/

const solve = (s) => {
    let count = 1, result = "";
    for (let j = 0; j < s.length; j++) {
        if (j + 1 < s.length && s[j] === s[j + 1]) {
            count++;
        }
        else {
            result += count + s[j];
            count = 1;
        }
    }
    return result;
};