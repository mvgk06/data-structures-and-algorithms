# [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

## Solution 1 - DFS

```js
const helper = (root) => {
    if (root === null) {
        return Number.MAX_VALUE;
    }
    if (root.left === null && root.right === null) {
        return 1;
    }
    const left = helper(root.left);
    const right = helper(root.right);
    return 1 + Math.min(left, right);
};

const minDepth = function (root) {
    if (root === null) {
        return 0;
    }
    return helper(root);
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - BFS

```js
const minDepth = function (root) {
    if (root === null) {
        return 0;
    }
    let level = 1;
    const queue = new Queue();
    queue.push(root);
    while (queue.getSize() > 0) {
        const size = queue.getSize();
        for (let i = 1; i <= size; i++) {
            const curr = queue.getFront();
            queue.pop();
            if (curr.left === null && curr.right === null) {
                return level;
            }
            if (curr.left !== null) {
                queue.push(curr.left);
            }
            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }
        level++;
    }
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
