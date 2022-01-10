# [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

## Solution 1 - BFS

```js
const levelOrder = function (root) {
    if (root === null) {
        return [];
    }
    const queue = new Queue(),
        result = [];
    queue.enque(root);
    while (queue.getSize() > 0) {
        const size = queue.getSize();
        const level = [];
        for (let i = 1; i <= size; i++) {
            const curr = queue.getFront();
            queue.deque();
            level.push(curr.val);
            if (curr.left != null) {
                queue.enque(curr.left);
            }
            if (curr.right != null) {
                queue.enque(curr.right);
            }
        }
        result.push(level);
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - DFS

```js
const dfs = (root, level, result) => {
    if (root === null) {
        return;
    }
    if (!result[level]) {
        result[level] = [];
    }
    result[level].push(root.val);
    dfs(root.left, level + 1, result);
    dfs(root.right, level + 1, result);
};

const levelOrder = function (root) {
    if (root === null) {
        return [];
    }
    const result = [];
    dfs(root, 0, result);
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
