/*

Problem

https://leetcode.com/problems/invert-binary-tree/

Approach

1. DFS
- Swap the left and right nodes.
- Recursively solve the left and right subtree.
- Return the root.
- If the root is null then return null.

Time - O(n)
Space - O(h)

2. BFS
- Create a queue and push the root.
- While the queue is not empty, deque the front node and swap the left and right nodes.
- If the left, right is not null then push it into the queue.
- Return the root.

Time - O(n)
Space - O(w)

n - number of nodes
h - height of the tree
w - width of the tree

*/

/* DFS */

const invertTree = function (root) {
  if (root === null) {
    return null;
  }
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

/* BFS */

const Queue = require("../../data-structures/queue.js");

const invertTree2 = function (root) {
  if (root === null) {
    return null;
  }

  const queue = new Queue();
  queue.enque(root);

  while (queue.getSize() > 0) {

    const curr = queue.getFront(), left = curr.left, right = curr.right;
    queue.deque();

    curr.left = right;
    curr.right = left;

    if (right != null) {
      queue.enque(right);
    }

    if (left != null) {
      queue.enque(left);
    }
  }

  return root;
};
