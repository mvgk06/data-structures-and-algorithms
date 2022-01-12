# [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)

## Solution 1 - Brute force

```js
const helper = (root) => {
    if (root === null) {
        return 0;
    }
    const left = helper(root.left),
        right = helper(root.right);
    return 1 + Math.max(left, right);
};

const isBalanced = function (root) {
    if (root === null) {
        return true;
    }
    const left = helper(root.left),
        right = helper(root.right);
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
```

-   Time - `O(n^2)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - Optimized

```js
const helper = (root) => {
    if (root === null) {
        return 0;
    }
    const left = helper(root.left);
    if (left === -1) {
        return -1;
    }
    const right = helper(root.right);
    if (right === -1) {
        return -1;
    }
    if (Math.abs(left - right) <= 1) {
        return 1 + Math.max(left, right);
    }
    return -1;
};

const isBalanced = function (root) {
    const height = helper(root);
    if (height === -1) {
        return false;
    }
    return true;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
