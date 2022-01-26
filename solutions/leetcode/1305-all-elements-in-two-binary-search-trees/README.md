# [1305. All Elements in Two Binary Search Trees](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/)

## Solution 1 - Brute force

```js
const helper = (root, result) => {
    if (root === null) {
        return;
    }
    result.push(root.val);
    helper(root.left, result);
    helper(root.right, result);
};

const getAllElements = function (root1, root2) {
    const result = [];
    helper(root1, result);
    helper(root2, result);
    result.sort((first, second) => {
        if (first < second) {
            return -1;
        }
        return 1;
    });
    return result;
};
```

-   Time - `O((n+m)log(n+m))`
-   Space - `O(n+m)`
-   Where `n`, `m` is the number of nodes of tree 1 and tree 2.

## Solution 2 - Inorder + Two pointers

```js
const helper = (root, result) => {
    if (root === null) {
        return;
    }
    helper(root.left, result);
    result.push(root.val);
    helper(root.right, result);
};

const getAllElements = function (root1, root2) {
    const left = [],
        right = [];
    helper(root1, left);
    helper(root2, right);
    const result = [];
    let l = 0,
        r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l]);
            l++;
        } else {
            result.push(right[r]);
            r++;
        }
    }
    while (l < left.length) {
        result.push(left[l]);
        l++;
    }
    while (r < right.length) {
        result.push(right[r]);
        r++;
    }
    return result;
};
```

-   Time - `O(n+m)`
-   Space - `O(n+m)`
-   Where `n`, `m` is the number of nodes of tree 1 and tree 2.
