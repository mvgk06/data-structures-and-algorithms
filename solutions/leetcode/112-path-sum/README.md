# [112. Path Sum](https://leetcode.com/problems/path-sum/)

## Solution 1 - DFS

```js
const helper = (root, sum, target) => {
    if (root === null) {
        return false;
    }
    if (root.left === null && root.right === null) {
        if (sum + root.val === target) {
            return true;
        }
        return false;
    }
    return helper(root.left, sum + root.val, target) || helper(root.right, sum + root.val, target);
};

const hasPathSum = function (root, targetSum) {
    return helper(root, 0, targetSum);
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - BFS

```js
const hasPathSum = function (root, targetSum) {
    if (root === null) {
        return false;
    }
    const queue = new Queue();
    queue.push([root, 0]);
    while (queue.getSize()) {
        const [curr, sum] = queue.getFront();
        queue.pop();
        if (curr.left === null && curr.right === null) {
            if (sum + curr.val === targetSum) {
                return true;
            }
        }
        if (curr.left !== null) {
            queue.push([curr.left, sum + curr.val]);
        }
        if (curr.right !== null) {
            queue.push([curr.right, sum + curr.val]);
        }
    }
    return false;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
