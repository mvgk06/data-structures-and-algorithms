/*

Problem

https://leetcode.com/problems/binary-tree-paths/

Approach

1. DFS
- Recursively call for left and right subtree and add the current node to the path.
- If the current node is null, then return.
- If the current node is a leaf, then add the current node to the path and push the path into the result.
- Return the result.

Time - O(n)
Space - O(n)

2. BFS
- Create a queue and push the root along with the path as an empty string.
- While the queue is not empty, deque the front node, if it is a leaf node then add it to the path and push the path into the result.
- If the left, right is not null then push it into the queue along the path where the current node is added.
- Return the result.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* DFS */

const getPaths = (curr, path, result) => {
    if (curr === null) {
        return;
    }
    if (curr.left === null && curr.right === null) {
        path += curr.val.toString();
        result.push(path);
        return;
    }
    getPaths(curr.left, path + `${curr.val}->`, result);
    getPaths(curr.right, path + `${curr.val}->`, result);
};

const binaryTreePaths = function (root) {
    const result = [];
    getPaths(root, "", result);
    return result;
};

/* BFS */

const Queue = require("../../data-structures/queue.js");

const getPaths = (src) => {
    const queue = new Queue();
    queue.enque([src, ""]);
    const result = [];
    while (queue.getSize() > 0) {
        let [curr, path] = queue.getFront();
        queue.deque();
        if (curr.left === null && curr.right === null) {
            path += curr.val.toString();
            result.push(path);
        }
        if (curr.left != null) {
            queue.enque([curr.left, path + `${curr.val}->`]);
        }
        if (curr.right != null) {
            queue.enque([curr.right, path + `${curr.val}->`]);
        }
    }
    return result;
};

const binaryTreePaths = function (root) {
    const result = getPaths(root);
    return result;
};