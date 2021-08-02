/*

Problem

https://leetcode.com/problems/diameter-of-binary-tree/

Approach

1. Brute force
- Compute the diameter through the current node which is the sum of the longest path on the left and the right subtree.
- Return the maximum diameter from all the possible diameters that is diameter through all the nodes.

Time - O(n^2)
Space - O(n)

2. Optimized
- Compute the longest path on the left and the right subtree and return 1 plus the maximum of both the paths.
- When computing the longest path, update the result whenever the current diameter is larger.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* Brute force */

const longestPath = (root) => {
    if (root === null) {
        return 0;
    }
    const left = longestPath(root.left);
    const right = longestPath(root.right);
    return 1 + Math.max(left, right);
};

const diameterOfBinaryTree = function (root) {
    if (root === null) {
        return 0;
    }
    const leftPath = longestPath(root.left);
    const rightPath = longestPath(root.right);
    const curr = leftPath + rightPath;
    const left = diameterOfBinaryTree(root.left);
    const right = diameterOfBinaryTree(root.right);
    return Math.max(curr, left, right);
};

/* Optimized */

const diameterOfBinaryTree = function (root) {
    let result = 0;
    const longestPath = (root) => {
        if (root === null) {
            return 0;
        }
        const left = longestPath(root.left);
        const right = longestPath(root.right);
        result = Math.max(result, left + right);
        return 1 + Math.max(left, right);
    };
    longestPath(root);
    return result;
};