# [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)

## Solution 1 - Bottom up DFS

```js
const helper = (root) => {
    if (root === null) {
        return [-Number.MAX_VALUE, Number.MAX_VALUE];
    }
    const left = helper(root.left);
    if (!left) {
        return false;
    }
    const right = helper(root.right);
    if (!right) {
        return false;
    }
    const [leftMax, leftMin] = left;
    const [rightMax, rightMin] = right;
    if (root.val > leftMax && root.val < rightMin) {
        return [Math.max(leftMax, rightMax, root.val), Math.min(leftMin, rightMin, root.val)];
    }
    return false;
};

const isValidBST = function (root) {
    const result = helper(root);
    if (!result) {
        return false;
    }
    return true;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - BFS

```js
const isValidBST = function (root) {
    const queue = new Queue();
    queue.enque([root, -Number.MAX_VALUE, Number.MAX_VALUE]);
    while (queue.getSize() > 0) {
        const [curr, min, max] = queue.getFront();
        queue.deque();
        if (curr.val <= min || curr.val >= max) {
            return false;
        }
        if (curr.left !== null) {
            queue.enque([curr.left, min, curr.val]);
        }
        if (curr.right !== null) {
            queue.enque([curr.right, curr.val, max]);
        }
    }
    return true;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
