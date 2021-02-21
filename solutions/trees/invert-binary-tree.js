/*

DFS

Time - O(n)
Space - O(n)

*/

const invert = (curr) => {
  if (curr === null) {
    return;
  }

  const temp = curr.left;
  curr.left = curr.right;
  curr.right = temp;

  invert(curr.left);
  invert(curr.right);
};

const invertTree = function (root) {
  invert(root);
  return root;
};

/*

BFS

Time - O(n)
Space - O(n)

*/

const Deque=require("../../data-structures/deque.js");

const invertTree2 = function (root) {
  if (root === null) {
    return null;
  }

  const queue = new Deque();
  queue.push(root);

  while (queue.getSize() > 0) {
    
    const curr = queue.getFront(),left = curr.left,right = curr.right;
    queue.deque();

    curr.left = right;
    curr.right = left;

    if (right != null) {
      queue.push(right);
    }

    if (left != null) {
      queue.push(left);
    }
  }

  return root;
};
