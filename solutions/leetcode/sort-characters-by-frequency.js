/*

Problem

https://leetcode.com/problems/sort-characters-by-frequency/

Approach

1. Heap
- Store the frequency of characters in a map.
- Insert all the characters along with its frequency in a max heap.
- While there are elements in the heap, remove the top and update the result.
- Return the result as a string.

Time - O(nlogn)
Space - O(n)

2. Bucket sort
- The range of frequencies is small, we can bucket sort based on frequency.
- Store the frequency of characters in a map.
- Create n buckets, and store all the characters in the bucket based on its frequency.
- Sort the individual buckets.
- Traverse the buckets backwards and update the result.
- Return the result as a string.

Time - O(n)
Space - O(n)

n - size of the string

*/

/* Heap */

const Heap = require("../../data-structures/heap");

const frequencySort = function (s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
        }
        else {
            map.set(s.charAt(i), 1);
        }
    }
    const maxHeap = new Heap((curr, parent) => curr.value > parent.value);
    for (const key of map.keys()) {
        maxHeap.insert(key, map.get(key));
    }
    const result = [];
    while (maxHeap.getSize() > 0) {
        const key = maxHeap.getTop().key;
        result.push(key.repeat(map.get(key)));
        maxHeap.delete();
    }
    return result.join("");
};

/* Bucket sort */

const frequencySort2 = function (s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
        }
        else {
            map.set(s.charAt(i), 1);
        }
    }
    const buckets = new Array(s.length + 1);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    for (const key of map.keys()) {
        buckets[map.get(key)].push(key);
    }
    for (let i = 0; i < buckets.length; i++) {
        buckets[i].sort((a, b) => {
            if (a < b) {
                return -1;
            }
            return 1;
        });
    }
    const result = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        for (let j = 0; j < buckets[i].length; j++) {
            const key = buckets[i][j];
            result.push(key.repeat(i));
        }
    }
    return result.join("");
};