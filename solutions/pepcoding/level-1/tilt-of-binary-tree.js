/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/tilt-of-binary-tree/ojquestion

Approach
- Recursively get the sum, tilt for left and right sub-tree.
- Compute and return the current sum and tilt.
- If the root is null, then return 0 for sum and tilt.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const getSumAndTilt = (root) => {
	if (root === null) {
		return [0, 0];
	}
	const [leftSum, leftTilt] = getSumAndTilt(root.left);
	const [rightSum, rightTilt] = getSumAndTilt(root.right);
	const currSum = root.value + leftSum + rightSum,
		currTilt = Math.abs(leftSum - rightSum);
	return [currSum, currTilt + leftTilt + rightTilt];
};

const solve = (root) => {
	const [sum, tilt] = getSumAndTilt(root);
	console.log(tilt);
};
