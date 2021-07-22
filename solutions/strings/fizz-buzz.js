/*

Problem

https://leetcode.com/problems/fizz-buzz/

Approach

1. Brute force
- Traverse from 1 to n and push the strings into the result array based on the divisibility.

Time - O(n)
Space - O(n)

2. Hashing
- Store all the given numbers and the strings in a map.
- Traverse from 1 to n and go through the map and based on the divisibility of the keys add the value to the current solution.
- If the current solution is empty then add the current number as the solution.
- Push the current solution into the result.
- Return the result.

Time - O(n)
Space - O(n)

*/

/* Brute force */

const fizzBuzz = function (n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            result.push("Fizz");
        }
        else if (i % 5 === 0) {
            result.push("Buzz");
        }
        else {
            result.push(i.toString());
        }
    }
    return result;
};

/* Hashing */

const fizzBuzz2 = function (n) {
    const map = new Map();
    map.set(3, "Fizz");
    map.set(5, "Buzz");
    const result = [];
    for (let i = 1; i <= n; i++) {
        let curr = "";
        for (const key of map.keys()) {
            if (i % key === 0) {
                curr += map.get(key);
            }
        }
        if (curr === "") {
            curr = i.toString();
        }
        result.push(curr);
    }
    return result;
};