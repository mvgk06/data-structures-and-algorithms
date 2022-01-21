# [897. Increasing Order Search Tree](https://leetcode.com/problems/increasing-order-search-tree/)

## Solution 1 - DFS + Dummy node

```js
const increasingBST = function (root) {
    let dummy = new TreeNode(0),
        curr = dummy;
    const helper = (root) => {
        if (root === null) {
            return;
        }
        helper(root.left);
        root.left = null;
        curr.right = root;
        curr = root;
        helper(root.right);
    };
    helper(root);
    return dummy.right;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
