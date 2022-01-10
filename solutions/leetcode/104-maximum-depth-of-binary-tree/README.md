# [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

## Solution 1 - DFS

```js
const maxDepth = function (root) {
    if (root === null) {
        return 0;
    }
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return 1 + Math.max(left, right);
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - BFS

```js
const maxDepth = function (root) {
    if (root === null) {
        return 0;
    }
    const queue = new Queue();
    queue.enque(root);
    let result = 0;
    while (queue.getSize() > 0) {
        const size = queue.getSize();
        for (let i = 1; i <= size; i++) {
            const curr = queue.getFront();
            queue.deque();
            if (curr.left !== null) {
                queue.enque(curr.left);
            }
            if (curr.right !== null) {
                queue.enque(curr.right);
            }
        }
        result++;
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
