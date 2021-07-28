/*

Problem

https://leetcode.com/problems/same-tree/

Approach

1. DFS
- Recursively check if the left and right subtree are same.
- If both the nodes are null, then return true.
- If either of the nodes are null or not equal, then return false.

Time - O(n)
Space - O(h)

2. BFS
- Push both the nodes into the queue.
- While the queue is not empty, deque first two nodes. 
- If both the nodes are null, then continue.
- If either of the nodes are null or not equal, then return false.
- Push left, right child nodes of both the nodes into the queue.
- Return true.

Time - O(n)
Space - O(w)

n - number of nodes
h - height of the tree
w - width of the tree

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

const Queue = require("../../data-structures/queue.js");

const isSameTree2 = function (p, q) {
    const queue = new Queue();
    queue.enque(p);
    queue.enque(q);
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
        queue.enque(curr1.left);
        queue.enque(curr2.left);
        queue.enque(curr1.right);
        queue.enque(curr2.right);
    }
    return true;
};
