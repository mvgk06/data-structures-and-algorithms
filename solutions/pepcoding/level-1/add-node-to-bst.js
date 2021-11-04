/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-search-tree/add-node-to-bst-official/ojquestion

Approach
- If the value of the current node is less than the key, then recursively add the node on the right sub-tree.
- Else if the value of the current node is greater than the key, then recursively add the node on the left sub-tree.
- Else return the current node.
- If the current node is null, then return a new node with value of key.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const addNode = (root, key) => {
	if (root === null) {
		return new BinaryTreeNode(key);
	}
	if (root.value < key) {
		root.right = addNode(root.right, key);
	} else if (root.value > key) {
		root.left = addNode(root.left, key);
	}
	return root;
};

const printBST = (root) => {
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
	printBST(root.left);
	printBST(root.right);
};

const solve = (root, key) => {
	addNode(root, key);
	printBST(root);
};
