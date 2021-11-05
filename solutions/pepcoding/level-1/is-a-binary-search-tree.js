/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/is-bst-official/ojquestion

Approach
- Recursively get the max, min for the left and the right sub-tree.
- If the left or the right sub-tree is not a bst, then return false.
- If the current node follows the bst property, then return the current max, min.
- Else return false.
- If the root is null, then return min, max.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const isBST = (root) => {
	if (root === null) {
		return [-Number.MAX_VALUE, Number.MAX_VALUE];
	}
	const left = isBST(root.left);
	if (left === false) {
		return false;
	}
	const right = isBST(root.right);
	if (right === false) {
		return false;
	}
	const [lmax, lmin] = left;
	const [rmax, rmin] = right;
	if (root.value > lmax && root.value < rmin) {
		return [Math.max(root.value, lmax, rmax), Math.min(root.value, lmin, rmin)];
	}
	return false;
};

const solve = (root) => {
	const result = isBST(root);
	if (result) {
		console.log(true);
	} else {
		console.log(false);
	}
};
