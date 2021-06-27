/*

Problem
https://leetcode.com/problems/single-number/

Approach

1. Hashmap
- Store the occurrences of the numbers using a map.
- If the frequency of a number is 1, then return it.

Time - O(n)
Space - O(n)

2. Bit manipulation
- XOR all the numbers in the array to get the unique number.

Time - O(n)
Space - O(1)

n - number of elements

*/

/* Hashmap */

const singleNumber = function (arr) {

    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
        else {
            map.set(arr[i], 1);
        }
    }

    for (let key of map.keys()) {
        if (map.get(key) === 1) {
            return key;
        }
    }

};

/* Bit manipulation */

const singleNumber2 = function (arr) {

    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result ^= arr[i];
    }

    return result;
};