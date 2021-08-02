/*

Problem

https://leetcode.com/problems/balanced-binary-tree/

Approach

1. Brute force
- Compute the left, right height and if the absolute difference between left, right is less than equal to 1, then continue checking the same for the left, right subtree.
- Else return false.

Time - O(n^2)
Space - O(n)

2. Optimized
- Compute the left, right height, if it is not balanced, then return -1.
- Else return the height of the subtree.
- If the height of the tree is -1, then return false.
- Else return true.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* Brute force */

const helper = (root) => {
    if (root === null) {
        return 0;
    }
    const left = helper(root.left), right = helper(root.right);
    return 1 + Math.max(left, right);
};

const isBalanced = function (root) {
    if (root === null) {
        return true;
    }
    const left = helper(root.left), right = helper(root.right);
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

/* Optimized */

const helper2 = (root) => {
    if (root === null) {
        return 0;
    }
    const left = helper2(root.left);
    if (left === -1) {
        return -1;
    }
    const right = helper2(root.right);
    if (right === -1) {
        return -1;
    }
    if (Math.abs(left - right) <= 1) {
        return 1 + Math.max(left, right);
    }
    return -1;
};

const isBalanced2 = function (root) {
    const height = helper2(root);
    if (height === -1) {
        return false;
    }
    return true;
};