# [100. Same Tree](https://leetcode.com/problems/same-tree/)

## Solution 1 - DFS

```js
const isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null || p.val != q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - BFS

```js
const isSameTree = function (p, q) {
    const queue = new Queue();
    queue.push([p, q]);
    while (queue.getSize() > 0) {
        const [p, q] = queue.getFront();
        queue.pop();
        if (p === null && q === null) {
            continue;
        } else if (p === null || q === null || p.val != q.val) {
            return false;
        }
        queue.push([p.left, q.left]);
        queue.push([p.right, q.right]);
    }
    return true;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
