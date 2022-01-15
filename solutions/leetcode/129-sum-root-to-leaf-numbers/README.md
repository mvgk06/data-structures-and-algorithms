# [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)

## Solution 1 - DFS + String

```js
const sumNumbers = function (root) {
    let result = 0;
    const helper = (root, s) => {
        if (root === null) {
            return;
        }
        const ch = root.val.toString();
        if (root.left === null && root.right === null) {
            result += parseInt(s + ch);
        }
        helper(root.left, s + ch);
        helper(root.right, s + ch);
    };
    helper(root, '');
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - BFS + String

```js
const sumNumbers = function (root) {
    if (root === null) {
        return 0;
    }
    let result = 0;
    const queue = new Queue();
    queue.push([root, '']);
    while (queue.getSize() > 0) {
        const [curr, s] = queue.getFront();
        queue.pop();
        const ch = curr.val.toString();
        if (curr.left === null && curr.right === null) {
            result += parseInt(s + ch);
        }
        if (curr.left !== null) {
            queue.push([curr.left, s + ch]);
        }
        if (curr.right !== null) {
            queue.push([curr.right, s + ch]);
        }
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 3 - DFS + Math

```js
const sumNumbers = function (root) {
    let result = 0;
    const helper = (root, val) => {
        if (root === null) {
            return;
        }
        const currVal = val * 10 + root.val;
        if (root.left === null && root.right === null) {
            result += parseInt(currVal);
        }
        helper(root.left, currVal);
        helper(root.right, currVal);
    };
    helper(root, 0);
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 4 - BFS + Math

```js
const sumNumbers = function (root) {
    if (root === null) {
        return 0;
    }
    let result = 0;
    const queue = new Queue();
    queue.push([root, 0]);
    while (queue.getSize() > 0) {
        const [curr, val] = queue.getFront();
        queue.pop();
        const currVal = val * 10 + curr.val;
        if (curr.left === null && curr.right === null) {
            result += currVal;
        }
        if (curr.left !== null) {
            queue.push([curr.left, currVal]);
        }
        if (curr.right !== null) {
            queue.push([curr.right, currVal]);
        }
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
