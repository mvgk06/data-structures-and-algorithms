# [701. Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/)

## Solution 1 - Recursive

```js
const insertIntoBST = function (root, val) {
    if (root === null) {
        return new TreeNode(val);
    }
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else if (val > root.val) {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - Iterative

```js
const insertIntoBST = function (root, val) {
    let prev = null,
        curr = root;
    while (curr !== null) {
        prev = curr;
        if (val < curr.val) {
            curr = curr.left;
        } else if (val > curr.val) {
            curr = curr.right;
        }
    }
    const node = new TreeNode(val);
    if (prev === null) {
        return node;
    }
    if (val < prev.val) {
        prev.left = node;
    } else {
        prev.right = node;
    }
    return root;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
