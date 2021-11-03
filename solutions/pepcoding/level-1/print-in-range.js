/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-search-tree/pir-bst-official/ojquestion

Approach
- If the value of the node is in the range, then perform inorder traversal.
- Else if the value of the node is less than the left, then recursively print the valid nodes in the right sub-tree.
- Else if the value of the node is greater than the right, then recursively print the valid nodes in the left sub-tree.
- If the node is null, then return.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const printInRange = (root, left, right) => {
	if (root === null) {
		return;
	}
	if (root.value >= left && root.value <= right) {
		printInRange(root.left, left, right);
		console.log(root.value);
		printInRange(root.right, left, right);
	} else if (root.value < left) {
		printInRange(root.right, left, right);
	} else if (root.value > right) {
		printInRange(root.left, left, right);
	}
};

const solve = (root, left, right) => {
	printInRange(root, left, right);
};
