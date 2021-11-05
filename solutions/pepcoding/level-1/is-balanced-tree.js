/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/is-balanced-binary-tree-official/ojquestion

Approach
- Recursively get the left and the right height.
- If the left or the right sub-tree is not balanced, then return false.
- If the current node is balanced, then return the current height.
- Else return false.
- If the root is null, then return 0.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const isBalancedTree = (root) => {
	if (root === null) {
		return 0;
	}
	const left = isBalancedTree(root.left);
	if (left === false) {
		return false;
	}
	const right = isBalancedTree(root.right);
	if (right === false) {
		return false;
	}
	if (Math.abs(left - right) <= 1) {
		return 1 + Math.max(left, right);
	}
	return false;
};

const solve = (root) => {
	const result = isBalancedTree(root);
	if (result) {
		console.log(true);
	} else {
		console.log(false);
	}
};
