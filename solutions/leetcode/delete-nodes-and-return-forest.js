/*

Problem

https://leetcode.com/problems/delete-nodes-and-return-forest/

Approach
- During the recursion while going from top to bottom we will get all the subtrees and while coming back up we will delete the given nodes.
- If the current node is deleted, then we can get either 0, 1 or 2 subtrees. 
- If the left node exist and is not deleted, then push it to the result.
- If the right node exist and is not deleted, then push it to the result.
- Recursively solve for the left and the right subtree.
- If the current node is deleted, then return null.
- Else return the current node.
- If the current node is null, then return null.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const helper = (root, deleted, result) => {
    if (root === null) {
        return null;
    }
    if (deleted.has(root.val)) {
        if (root.left != null && !deleted.has(root.left.val)) {
            result.push(root.left);
        }
        if (root.right != null && !deleted.has(root.right.val)) {
            result.push(root.right);
        }
    }
    root.left = helper(root.left, deleted, result);
    root.right = helper(root.right, deleted, result);
    return deleted.has(root.val) ? null : root;
};

const delNodes = function (root, arr) {
    if (root === null) {
        return [];
    }
    const deleted = new Set(arr);
    const result = [];
    helper(root, deleted, result);
    if (!deleted.has(root.val)) {
        result.push(root);
    }
    return result;
};