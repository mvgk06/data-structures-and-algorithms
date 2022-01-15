# [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

## Solution 1 - Recursive

```js
const helper = (root, result) => {
    if (root === null) {
        return;
    }
    helper(root.left, result);
    result.push(root.val);
    helper(root.right, result);
};

const inorderTraversal = function (root) {
    const result = [];
    helper(root, result);
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - Iterative

```js
const inorderTraversal = function (root) {
    if (root === null) {
        return [];
    }
    const result = [];
    const stack = [];
    stack.push([root, 1]);
    while (stack.length > 0) {
        const top = stack[stack.length - 1];
        if (top[1] === 1) {
            if (top[0].left !== null) {
                stack.push([top[0].left, 1]);
            }
            top[1]++;
        } else if (top[1] === 2) {
            result.push(top[0].val);
            if (top[0].right !== null) {
                stack.push([top[0].right, 1]);
            }
            top[1]++;
        } else {
            stack.pop();
        }
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
