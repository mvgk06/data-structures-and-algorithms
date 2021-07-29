/* 

Problem

https://leetcode.com/problems/decompress-run-length-encoded-list/

Approach
- For each pair [freq, val] push the val into the result array freq times.

Time - O(n)
Space - O(1)

n - number of elements in result array.

*/

const decompressRLElist = function (nums) {
    const result = [];
    for (let i = 0; i < nums.length - 1; i += 2) {
        const freq = nums[i], val = nums[i + 1];
        for (let j = 1; j <= freq; j++) {
            result.push(val);
        }
    }
    return result;
};