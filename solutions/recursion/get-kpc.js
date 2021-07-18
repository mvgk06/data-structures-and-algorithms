/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-kpc-official/ojquestion

Approach

1. Recursion
- Recursively get the kepad combinations for smaller sub problems.
- Create a result array where we can pick each character in the string for the current number along with the computed combinations.
- Return the result array.
- If n becomes equal to 1, then return an array with combination of characters for the first number.

Time - O(4^(n+1)*n)
Space - O(4^(n+1))

2. Backtracking
- For each index we go through the characters of the string for that number and we either pick or don't pick the character.
- Recursively solve the smaller sub problems.
- If the index becomes equal to the length of the string and if the length of current combination is equal to the string length, then push the current combination 
into the result and return.

Time - O(4^(n+1))
Space - O(4^(n+1))

n - size of the string

*/

/* Recursion */

const getKpc = (s, map, n) => {
    if (n === 1) {
        const curr = [];
        const str = map[s[n - 1]];
        for (let i = 0; i < str.length; i++) {
            curr.push(str[i]);
        }
        return curr;
    }
    const curr = getKpc(s, map, n - 1);
    const str = map[s[n - 1]];
    const result = [];
    for (let i = 0; i < curr.length; i++) {
        for (let j = 0; j < str.length; j++) {
            result.push(curr[i] + str[j]);
        }
    }
    return result;
};

const solve = (s) => {
    const map = {
        "0": ".;",
        "1": "abc",
        "2": "def",
        "3": "ghi",
        "4": "jkl",
        "5": "mno",
        "6": "pqrs",
        "7": "tu",
        "8": "vwx",
        "9": "yz",
    };
    const result = getKpc(s, map, s.length);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};

/* Backtracking */

const getKpc2 = (s, map, index, curr, result) => {
    if (index === s.length) {
        if (curr.length === s.length) {
            result.push(curr);
        }
        return;
    }
    const str = map[s[index]];
    for (let i = 0; i < str.length; i++) {
        getKpc2(s, map, index + 1, curr + str[i], result);
        getKpc2(s, map, index + 1, curr, result);
    }
};

const solve2 = (s) => {
    const map = {
        "0": ".;",
        "1": "abc",
        "2": "def",
        "3": "ghi",
        "4": "jkl",
        "5": "mno",
        "6": "pqrs",
        "7": "tu",
        "8": "vwx",
        "9": "yz",
    };
    const curr = "", result = [];
    getKpc2(s, map, 0, curr, result);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};