# [103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

## Solution 1 - BFS + Reverse

```js
const zigzagLevelOrder = function (root) {
    if (root === null) {
        return [];
    }
    const result = [];
    const queue = new Queue();
    queue.push(root);
    let level = 0;
    while (queue.getSize() > 0) {
        const size = queue.getSize();
        const currLevel = [];
        for (let i = 1; i <= size; i++) {
            const curr = queue.getFront();
            queue.pop();
            currLevel.push(curr.val);
            if (curr.left !== null) {
                queue.push(curr.left);
            }
            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }
        if (level % 2 === 0) {
            result.push([...currLevel]);
        } else {
            result.push([...currLevel.reverse()]);
        }
        level++;
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 2 - DFS + Reverse

```js
const helper = (root, level, result) => {
    if (root === null) {
        return;
    }
    if (!result[level]) {
        result[level] = [];
    }
    result[level].push(root.val);
    helper(root.left, level + 1, result);
    helper(root.right, level + 1, result);
};

const zigzagLevelOrder = function (root) {
    const result = [];
    helper(root, 0, result);
    for (let i = 0; i < result.length; i++) {
        if (i % 2 !== 0) {
            result[i].reverse();
        }
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.

## Solution 3 - BFS + Deque

```js
const zigzagLevelOrder = function (root) {
    if (root === null) {
        return [];
    }
    const result = [];
    const deque = new Deque();
    deque.pushRear(root);
    let level = 0;
    while (deque.getSize() > 0) {
        const size = deque.getSize();
        const currLevel = [];
        for (let i = 1; i <= size; i++) {
            if (level % 2 === 0) {
                const curr = deque.getRear();
                deque.popRear();
                currLevel.push(curr.val);
                if (curr.left !== null) {
                    deque.pushFront(curr.left);
                }
                if (curr.right !== null) {
                    deque.pushFront(curr.right);
                }
            } else {
                const curr = deque.getFront();
                deque.popFront();
                currLevel.push(curr.val);
                if (curr.right !== null) {
                    deque.pushRear(curr.right);
                }
                if (curr.left !== null) {
                    deque.pushRear(curr.left);
                }
            }
        }
        result.push([...currLevel]);
        level++;
    }
    return result;
};
```

-   Time - `O(n)`
-   Space - `O(n)`
-   Where `n` is the number of nodes.
