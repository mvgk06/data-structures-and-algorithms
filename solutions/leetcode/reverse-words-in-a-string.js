/*

Problem

https://leetcode.com/problems/reverse-words-in-a-string/

Approach
- Use two pointers i, j to keep track of the words in the string.
- Traverse the string backwards.
- If the current element is a character, then decrement ith pointer by 1.
- Else if the current word is valid, then push it into the result.
- Move the jth pointer to the position of ith pointer and decrement ith pointer by 1. 
- If the first word is valid, then push it into the result.
- Convert the result array into a string with spaces.

Time - O(n)
Space - O(n)

n - size of the string

*/

const reverseWords = function (s) {
    let i = s.length - 1, j = s.length;
    const result = [];
    while (i >= 0) {
        if (s[i] != " ") {
            i--;
        }
        else {
            const str = s.substring(i + 1, j);
            if (str.length > 0) {
                result.push(str);
            }
            j = i;
            i--;
        }
    }
    if (s.substring(i + 1, j).length > 0) {
        result.push(s.substring(i + 1, j));
    }
    return result.join(" ");
};