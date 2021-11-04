/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/print-single-child-nodes-official/ojquestion

Approach
- If the current node's left is null and right is not null, then print the value of the right node.
- If the current node's left is not null and right is null, then print the value of the left node.
- Recursively solve for the left and the right sub-tree.
- If the current node is null, then return.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const printSingleChildNodes = (root) => {
	if (root === null) {
		return;
	}
	if (root.left === null && root.right !== null) {
		console.log(root.right.value);
	}
	if (root.left !== null && root.right === null) {
		console.log(root.left.value);
	}
	printSingleChildNodes(root.left);
	printSingleChildNodes(root.right);
};

const solve = (root) => {
	printSingleChildNodes(root);
};
