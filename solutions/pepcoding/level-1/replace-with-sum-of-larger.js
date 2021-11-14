/*

Problem

https://pepcoding.com/resources/online-java-foundation/binary-search-tree/replace-with-sum-of-larger-official/ojquestion

Approach

1. Brute force
- For each node, traverse the tree from the root and get the sum of all the nodes that are greater than the current node.
- Set the modified value of the current node as current sum.
- Recursively solve for the left and the right subtree.
- If the current node is null, then return.
- Print the bst.

Time - O(n^2)
Space - O(n)

2. Optimized 
- Visit the greater nodes first so that computing the sum and updating the value of each node can be done in the same traversal.
- Keep track of the sum of the nodes that are visited so far.
- Recursively solve for the right subtree.
- Set the value of the current node as current sum.
- Recursively solve for the left subtree.
- If the root is null, then return.
- Print the bst.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* Brute force */

const printBST = (root) => {
	if (root === null) {
		return;
	}
	if (root.left === null && root.right === null) {
		console.log(`. <- ${root.modifiedValue} -> .`);
	} else if (root.left === null) {
		console.log(`. <- ${root.modifiedValue} -> ${root.right.modifiedValue}`);
	} else if (root.right === null) {
		console.log(`${root.left.modifiedValue} <- ${root.modifiedValue} -> .`);
	} else {
		console.log(
			`${root.left.modifiedValue} <- ${root.modifiedValue} -> ${root.right.modifiedValue}`,
		);
	}
	printBST(root.left);
	printBST(root.right);
};

const greaterSum = (root, key, sum) => {
	if (root === null) {
		return 0;
	}
	const leftSum = greaterSum(root.left, key, sum);
	const rightSum = greaterSum(root.right, key, sum);
	if (root.value > key) {
		return root.value + leftSum + rightSum;
	}
	return leftSum + rightSum;
};

const replaceNodes = (root, curr) => {
	if (curr === null) {
		return;
	}
	root.modifiedValue = greaterSum(root, curr.value, 0);
	replaceNodes(root, curr.left);
	replaceNodes(root, curr.right);
};

const solve = (root) => {
	replaceNodes(root, root);
	printBST(root);
};

/* Optimized */

const printBST2 = (root) => {
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

const solve2 = (root) => {
	let sum = 0;
	const replaceNodes2 = (root) => {
		if (root === null) {
			return;
		}
		replaceNodes2(root.right);
		const prevValue = root.value;
		root.value = sum;
		sum += prevValue;
		replaceNodes2(root.left);
	};
	replaceNodes2(root);
	printBST2(root);
};
