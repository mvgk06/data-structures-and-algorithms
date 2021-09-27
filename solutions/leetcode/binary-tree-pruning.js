/*

Problem

https://leetcode.com/problems/binary-tree-pruning/

Approach

1. Top down recursion
- If the current subtree contains only 0, then delete it by returning null.
- Recursively solve for left, right subtree and return the current node.
- If the current node is null, then return null.

Time - O(n)
Space - O(n)

2. Bottom up recursion
- Recursively solve for left and right subtree.
- If the current node is 0 and it's a leaf node, then return null.
- Else return the current node.
- If the current node is null, then return null.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* Top down recursion */

const helper = (root) => {
    if (root === null) {
        return true;
    }
    return root.val === 0 && helper(root.left) && helper(root.right);
};

const pruneTree = function (root) {
    if (root === null || helper(root)) {
        return null;
    }
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    return root;
};

/* Bottom up recursion */

const pruneTree2 = function (root) {
    if (root === null) {
        return null;
    }
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    if (root.val === 0 && !root.left && !root.right) {
        return null;
    }
    return root;
};