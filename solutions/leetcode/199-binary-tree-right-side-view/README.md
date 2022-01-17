# [199. Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)

## Solution 1 - DFS

```js
const helper = (root, level, result) => {
    if (root === null) {
        return result;
    }
    if (result.length === level) {
        result.push(root.val);
    }
    helper(root.right, level + 1, result);
    helper(root.left, level + 1, result);
};

const rightSideView = function (root) {
    const result = [];
    helper(root, 0, result);
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - BFS

```js
const rightSideView = function (root) {
    if (root === null) {
        return [];
    }
    const queue = new Queue(),
        result = [];
    queue.push(root);
    while (queue.getSize() > 0) {
        const size = queue.getSize();
        for (let i = 1; i <= size; i++) {
            const curr = queue.getFront();
            queue.pop();
            if (i === size) {
                result.push(curr.val);
            }
            if (curr.left !== null) {
                queue.push(curr.left);
            }
            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
