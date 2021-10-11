/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-encodings-official/ojquestion

Approach
- At each index, we have two choices either we can encode the current number or encode the current along with the next number.
- After making a choice, recursively solve for the smaller sub problems.
- Backtrack, undo the choice that was made and try other choices.
- If the index is equal to the string length, then push the current encoding into the result and return.
- If out of bounds, then return.

Time - O(2^n)
Space - O(n+n*a)

n - size of the string
a - number of encodings

*/

const helper = (s, i, map, curr, result) => {
    if (i === s.length) {
        result.push(curr);
        return;
    }
    if (i > s.length) {
        return;
    }
    const ch = s.substring(i, i + 1), ch2 = s.substring(i, i + 2);
    if (map.get(ch)) {
        helper(s, i + 1, map, curr + map.get(ch), result);
    }
    if (map.get(ch2)) {
        helper(s, i + 2, map, curr + map.get(ch2), result);
    }
};

const solve = (s) => {
    const map = new Map();
    for (let i = 1; i <= 26; i++) {
        const ch = String.fromCharCode(i + 96);
        map.set(`${i}`, ch);
    }
    const curr = "", result = [];
    helper(s, 0, map, curr, result);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};