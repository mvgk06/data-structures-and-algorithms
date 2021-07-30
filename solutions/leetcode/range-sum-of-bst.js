/*

Problem

https://leetcode.com/problems/range-sum-of-bst/

Approach
- If the current node is smaller than low, then return the range sum for right subtree. 
- If the current node is greater than high, then return the range sum for left subtee.
- Else recursively compute the range sum for left and right subtree.
- Return the sum of currrent, left and right sum.
- If the root is null, then return 0.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const rangeSumHelper = (root, low, high) => {
    if (root === null) {
        return 0;
    }
    if (root.val < low) {
        return rangeSumHelper(root.right, low, high);
    }
    if (root.val > high) {
        return rangeSumHelper(root.left, low, high);
    }
    const leftSum = rangeSumHelper(root.left, low, high);
    const rightSum = rangeSumHelper(root.right, low, high);
    return root.val + leftSum + rightSum;
};

const rangeSumBST = function (root, low, high) {
    return rangeSumHelper(root, low, high);
};