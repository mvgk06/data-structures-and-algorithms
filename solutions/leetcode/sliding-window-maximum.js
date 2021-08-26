/*

Problem

https://leetcode.com/problems/sliding-window-maximum/

Approach

1. Brute force
- Traverse all the subarrays of size k and push the maximum from each subarray into the result.

Time - O(n^2)
Space - O(1)

2. Sliding window
- The window is valid when its size is equal to k.
- Use two pointers start, end to represent the start and the end of the window.
- Use a deque to get the maximum for each window and to check whether the window is valid or not.
- Process the current element.
- If the window is valid, update the result, deque and shrink the window.
- Expand the window.

Time - O(n)
Space - O(n)

n - number of elements
k - size of the window

*/

/* Brute force */

const maxSlidingWindow = function (nums, k) {
    const result = [];
    for (let i = 0; i < (nums.length - k + 1); i++) {
        let max = -Number.MAX_VALUE;
        for (let j = i; j < i + k; j++) {
            max = Math.max(max, nums[j]);
        }
        result.push(max);
    }
    return result;
};


/* Sliding window */

const Deque = require("../../data-structures/deque.js");

const maxSlidingWindow2 = function (nums, k) {
    const deque = new Deque(), result = [];
    let start = 0, end = 0;
    while (end < nums.length) {
        while (deque.getSize() != 0 && nums[end] > nums[deque.getRear()]) {
            deque.pop();
        }
        deque.push(end);
        if (end - start + 1 === k) {
            result.push(nums[deque.getFront()]);
            if (deque.getFront() === start) {
                deque.deque();
            }
            start++;
        }
        end++;
    }
    return result;
};