# [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)

## Solution 1 - Brute force

```js
const helper = (root) => {
    if (root === null) {
        return 0;
    }
    const left = helper(root.left);
    const right = helper(root.right);
    return 1 + Math.max(left, right);
};

const diameterOfBinaryTree = function (root) {
    let result = 0;
    const diameter = (root) => {
        if (root === null) {
            return;
        }
        const left = helper(root.left);
        const right = helper(root.right);
        result = Math.max(result, left + right);
        diameter(root.left);
        diameter(root.right);
    };
    diameter(root);
    return result;
};
```

-   Time - `O(n^2)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - Optimized

```js
const diameterOfBinaryTree = function (root) {
    let result = 0;
    const diameter = (root) => {
        if (root === null) {
            return 0;
        }
        const left = diameter(root.left);
        const right = diameter(root.right);
        result = Math.max(result, left + right);
        return 1 + Math.max(left, right);
    };
    diameter(root);
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
