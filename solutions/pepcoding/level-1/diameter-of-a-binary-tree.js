/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/diameter-of-binary-tree-official/ojquestion

Approach

1. Brute force
- Recursively get the left and right height.
- The current diameter is the sum of left and right height.
- Recursively get the left and right diameter.
- The resultant diameter is the maximum of current, left and right diameter.
- Return the resultant diameter.
- If the root is null, then return 0.

Time - O(n^2)
Space - O(n)

2. Optimized
- Instead of computing the height and the diameter separately, compute both the values using the same function by returning the height and the diameter as a pair.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* Brute force */

const getHeight = (root) => {
	if (root === null) {
		return 0;
	}
	const leftHeight = getHeight(root.left);
	const rightHeight = getHeight(root.right);
	return 1 + Math.max(leftHeight, rightHeight);
};

const getDiameter = (root) => {
	if (root === null) {
		return 0;
	}
	const leftHeight = getHeight(root.left);
	const rightHeight = getHeight(root.right);
	const currDiameter = leftHeight + rightHeight;
	const leftDiameter = getDiameter(root.left);
	const rightDiameter = getDiameter(root.right);
	return Math.max(currDiameter, leftDiameter, rightDiameter);
};

const solve = (root) => {
	const result = getDiameter(root);
	console.log(result);
};

/* Optimized */

const getHeightAndDiameter = (root) => {
	if (root === null) {
		return [0, 0];
	}
	const [leftHeight, leftDiameter] = getHeightAndDiameter(root.left);
	const [rightHeight, rightDiameter] = getHeightAndDiameter(root.right);
	const currHeight = 1 + Math.max(leftHeight, rightHeight),
		currDiameter = leftHeight + rightHeight;
	return [currHeight, Math.max(currDiameter, leftDiameter, rightDiameter)];
};

const solve2 = (root) => {
	const [height, diameter] = getHeightAndDiameter(root);
	console.log(diameter);
};
