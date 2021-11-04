/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/transform-to-normal-from-left-cloned-tree-official/ojquestion

Approach
- If the current node's left is not null, then recursively set the current node's left (by skipping the cloned node) and current node's right.
- Return the current node.
- If the current node is null, then return null.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const transformTree = (root) => {
	if (root === null) {
		return null;
	}
	if (root.left !== null) {
		root.left = transformTree(root.left.left);
	}
	root.right = transformTree(root.right);
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
	transformTree(root);
	printTree(root);
};
