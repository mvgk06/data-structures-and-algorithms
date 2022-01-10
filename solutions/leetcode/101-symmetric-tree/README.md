# [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)

## Solution 1 - DFS

```js
const helper = (l, r) => {
    if (l === null && r === null) {
        return true;
    }
    if (l === null || r === null || l.val !== r.val) {
        return false;
    }
    return helper(l.left, r.right) && helper(l.right, r.left);
};

const isSymmetric = function (root) {
    return helper(root.left, root.right);
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - BFS

```js
const isSymmetric = function (root) {
    const queue = new Queue();
    queue.enque([root.left, root.right]);
    while (queue.getSize() > 0) {
        const [l, r] = queue.getFront();
        queue.deque();
        if (l === null && r === null) {
            continue;
        }
        if (l === null || r === null || l.val !== r.val) {
            return false;
        }
        queue.enque([l.left, r.right]);
        queue.enque([l.right, r.left]);
    }
    return true;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
