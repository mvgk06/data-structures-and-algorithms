# [700. Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)

## Solution 1 - Recursive

```js
const searchBST = function (root, val) {
    if (root === null) {
        return null;
    }
    if (root.val === val) {
        return root;
    }
    if (val < root.val) {
        return searchBST(root.left, val);
    }
    return searchBST(root.right, val);
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - Iterative

```js
const searchBST = function (root, val) {
    let curr = root;
    while (curr !== null) {
        if (curr.val === val) {
            return curr;
        } else if (val < curr.val) {
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
    return null;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
