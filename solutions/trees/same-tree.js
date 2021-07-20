/*

Problem

https://leetcode.com/problems/same-tree/

Approach

1. DFS
- Recursively check if the left and right subtree are same.
- If both the nodes are null, then return true.
- If either of the nodes are null or not equal, then return false.

Time - O(n)
Space - O(n)

2. BFS
- Push both the nodes into the queue.
- While the queue is not empty, deque first two nodes. 
- If both the nodes are null, then continue.
- If either of the nodes are null or not equal, then return false.
- Push left, right child nodes of both the nodes into the queue.
- Return true.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* DFS */

const isSame = (curr1, curr2) => {
    if (curr1 === null && curr2 === null) {
        return true;
    }
    if (curr1 === null || curr2 === null || curr1.val != curr2.val) {
        return false;
    }
    return isSame(curr1.left, curr2.left) && isSame(curr1.right, curr2.right);
};

const isSameTree = function (p, q) {
    return isSame(p, q);
};

/* BFS */

const Deque = require("../../data-structures/deque.js");

const isSameTree2 = function (p, q) {
    const queue = new Deque();
    queue.push(p);
    queue.push(q);
    while (queue.getSize() > 0) {
        const curr1 = queue.getFront();
        queue.deque();
        const curr2 = queue.getFront();
        queue.deque();
        if (curr1 === null && curr2 === null) {
            continue;
        }
        else if (curr1 === null || curr2 === null || curr1.val != curr2.val) {
            return false;
        }
        queue.push(curr1.left);
        queue.push(curr2.left);
        queue.push(curr1.right);
        queue.push(curr2.right);
    }
    return true;
};
