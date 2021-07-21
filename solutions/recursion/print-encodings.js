/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-encodings-official/ojquestion

Approach

1. Recursion
- Recursively get the encodings for smaller sub problems.
- Create a result array where we can either encode the current number or encode the current along with the next number along with the computed encodings.
- Return the result array.
- If the index is equal to the length of the string, then return an array with empty string.
- If out of bounds, then return an empty array.

Time - O(2^n)
Space - O(k)

2. Backtracking
- At each index, we have two choices either we can encode the current number or encode the current along with the next number.
- Recursively solve the smaller sub problems.
- If the index is equal to the string length, then push the current encoding into the result and return.
- If out of bounds, then return.

Time - O(2^n)
Space - O(k)

n - size of the string
k - average number of encodings

*/

/* Recursion */

const getEncodings = (s, index, map) => {
    if (index === s.length) {
        return [""];
    }
    if (index > s.length) {
        return [];
    }
    const way1 = getEncodings(s, index + 1, map);
    const way2 = getEncodings(s, index + 2, map);
    const result = [];
    const ch = s.substring(index, index + 1), ch2 = s.substring(index, index + 2);
    if (map.get(ch)) {
        for (let i = 0; i < way1.length; i++) {
            result.push(map.get(ch) + way1[i]);
        }
    }
    if (map.get(ch2)) {
        for (let i = 0; i < way2.length; i++) {
            result.push(map.get(ch2) + way2[i]);
        }
    }
    return result;
};

const solve = (s) => {
    const map = new Map();
    for (let i = 1; i <= 26; i++) {
        const ch = String.fromCharCode(i + 96);
        map.set(`${i}`, ch);
    }
    const result = getEncodings(s, 0, map);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};

/* Backtracking */

const getEncodings2 = (s, index, map, curr, result) => {
    if (index === s.length) {
        result.push(curr);
        return;
    }
    if (index > s.length) {
        return;
    }
    const ch = s.substring(index, index + 1), ch2 = s.substring(index, index + 2);
    if (map.get(ch)) {
        getEncodings2(s, index + 1, map, curr + map.get(ch), result);
    }
    if (map.get(ch2)) {
        getEncodings2(s, index + 2, map, curr + map.get(ch2), result);
    }
};

const solve2 = (s) => {
    const map = new Map();
    for (let i = 1; i <= 26; i++) {
        const ch = String.fromCharCode(i + 96);
        map.set(`${i}`, ch);
    }
    const curr = "", result = [];
    getEncodings2(s, 0, map, curr, result);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};