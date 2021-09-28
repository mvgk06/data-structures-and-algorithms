/*

Problem

https://leetcode.com/problems/reverse-prefix-of-word/

Approach
- Find the index of the given character.
- Push the characters of the prefix backwards into the result.
- Push the rest of the characters forwards into the result.
- Return the result as a string. 

Time - O(n)
Space - O(n)

n - size of string

*/

const reversePrefix = function (word, ch) {
    const i = word.indexOf(ch);
    if (i === -1) {
        return word;
    }
    let start = 0, end = i;
    const result = [];
    while (end >= start) {
        result.push(word[end]);
        end--;
    }
    let curr = i + 1;
    while (curr < word.length) {
        result.push(word[curr]);
        curr++;
    }
    return result.join("");
};