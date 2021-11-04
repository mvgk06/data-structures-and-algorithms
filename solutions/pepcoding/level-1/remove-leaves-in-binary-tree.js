/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/remove-leaves-binary-tree-official/ojquestion

Approach
- Recursively remove the leaves from the left and the right sub-tree and set the current node's left and right.
- Return the current node.
- If the current node is null or it is a leaf node, then return null.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const removeLeaves = (root) => {
	if (root === null || (root.left === null && root.right === null)) {
		return null;
	}
	root.left = removeLeaves(root.left);
	root.right = removeLeaves(root.right);
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
	removeLeaves(root);
	printTree(root);
};
