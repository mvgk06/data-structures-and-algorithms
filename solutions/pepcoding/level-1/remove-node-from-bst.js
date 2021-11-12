/*

Problem

https://pepcoding.com/resources/online-java-foundation/binary-search-tree/remove-node-in-bst-official/ojquestion

Approach
- If the value of the current node is equal to the key and if no child exist, then return null.
- Else if the left child does not exist, then return the right child.
- Else if the right child does not exist, then return the left child.
- Else set the value of the current node to the maximum value on the left subtree, delete the node with maximum value on the left subtree, set the left of current node and return the current node.
- Else if the value of the current node is greater than the key, then recursively delete the node on the left subtree and set the left of current node.
- Else recursively delete the node on the right subtree and set the right of the current node.
- Return the current node.
- If the current node is null, then return null.

Time - O(n)
Space - O(n)

n - number of nodes

*/

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

const max = (root) => {
	if (root.right === null) {
		return root.value;
	}
	return max(root.right);
};

const removeNode = (root, key) => {
	if (root === null) {
		return null;
	}
	if (root.value === key) {
		if (root.left === null && root.right === null) {
			return null;
		} else if (root.left === null) {
			return root.right;
		} else if (root.right === null) {
			return root.left;
		} else {
			root.value = max(root.left);
			root.left = removeNode(root.left, root.value);
			return root;
		}
	} else if (root.value > key) {
		root.left = removeNode(root.left, key);
	} else {
		root.right = removeNode(root.right, key);
	}
	return root;
};

const solve = (root, key) => {
	const updatedRoot = removeNode(root, key);
	printBST(updatedRoot);
};
