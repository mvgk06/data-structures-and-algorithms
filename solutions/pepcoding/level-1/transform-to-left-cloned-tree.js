/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/transform-to-left-cloned-tree-official/ojquestion

Approach
- Create a clone of the current node.
- Store the reference of the left sub-tree.
- Set the current node's left as cloned node.
- Recursively set the cloned node's left and the current node's right.
- Return the current node.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const BinaryTreeNode = require('../../../data-structures/binary-tree-node');

const leftClone = (root) => {
	if (root === null) {
		return null;
	}
	const clonedNode = new BinaryTreeNode(root.value);
	const leftRef = root.left;
	root.left = clonedNode;
	clonedNode.left = leftClone(leftRef);
	root.right = leftClone(root.right);
	return root;
};

const printTree = (root) => {
	if (root === null) {
		return;
	}
	if (root.left === null && root.right === null) {
		console.log(`. <- ${root.value} -> .`);
	} else if (root.left === null) {
		console.log(`. <- ${root.value} -> ${root.right.value}`);
	} else if (root.right === null) {
		console.log(`${root.left.value} <- ${root.value} -> .`);
	} else {
		console.log(`${root.left.value} <- ${root.value} -> ${root.right.value}`);
	}
	printTree(root.left);
	printTree(root.right);
};

const solve = (root) => {
	leftClone(root);
	printTree(root);
};
