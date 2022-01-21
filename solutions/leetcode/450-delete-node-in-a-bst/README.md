# [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)

## Solution 1 - Recursive

```js
const getMin = (root) => {
    while (root.left !== null) {
        root = root.left;
    }
    return root.val;
};

const deleteNode = function (root, key) {
    if (root === null) {
        return null;
    }
    if (root.val === key) {
        if (root.left === null && root.right === null) {
            return null;
        }
        if (root.left === null) {
            return root.right;
        }
        if (root.right === null) {
            return root.left;
        }
        const minOnRight = getMin(root.right);
        root.val = minOnRight;
        root.right = deleteNode(root.right, minOnRight);
        return root;
    }
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        root.right = deleteNode(root.right, key);
    }
    return root;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - Iterative

```js
const deleteNode = function (root, key) {
    let prev = null,
        curr = root;
    while (curr !== null && curr.val !== key) {
        prev = curr;
        if (key < curr.val) {
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
    if (curr === null) {
        return root;
    }
    if (curr.left === null && curr.right === null) {
        if (prev === null) {
            return null;
        } else {
            if (key < prev.val) {
                prev.left = null;
            } else {
                prev.right = null;
            }
        }
    } else if (curr.left === null) {
        if (prev === null) {
            return curr.right;
        } else {
            if (key < prev.val) {
                prev.left = curr.right;
            } else {
                prev.right = curr.right;
            }
        }
    } else if (curr.right == null) {
        if (prev === null) {
            return curr.left;
        } else {
            if (key < prev.val) {
                prev.left = curr.left;
            } else {
                prev.right = curr.left;
            }
        }
    } else {
        let prevTemp = null,
            currTemp = curr.right;
        while (currTemp.left !== null) {
            prevTemp = currTemp;
            currTemp = currTemp.left;
        }
        curr.val = currTemp.val;
        if (prevTemp === null) {
            curr.right = currTemp.right;
        } else {
            if (currTemp.val < prevTemp.val) {
                prevTemp.left = currTemp.right;
            } else {
                prevTemp.right = currTemp.right;
            }
        }
    }
    return root;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
