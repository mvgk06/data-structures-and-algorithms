/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/largest-bst-subtree-official/ojquestion

Approach
- Recursively get the max, min, sum for the left and the right sub-tree.
- If left, right sub-tree is a bst and the current node follows the bst property, then update the result and return the current max, min, sum.
- Else return false.
- If the root is null, then return min, max, 0.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const getLargestBSTSubtree = (root, result) => {
	if (root === null) {
		return [-Number.MAX_VALUE, Number.MAX_VALUE, 0];
	}
	const left = getLargestBSTSubtree(root.left, result);
	const right = getLargestBSTSubtree(root.right, result);
	if (left && right) {
		const [leftMax, leftMin, leftSum] = left,
			[rightMax, rightMin, rightSum] = right;
		if (root.value > leftMax && root.value < rightMin) {
			const currMax = Math.max(root.value, leftMax, rightMax),
				currMin = Math.min(root.value, leftMin, rightMin),
				currSum = 1 + leftSum + rightSum;
			if (currSum > result.sum) {
				result.root = root.value;
				result.sum = currSum;
			}
			return [currMax, currMin, currSum];
		}
	}
	return false;
};

const solve = (root) => {
	const result = {
		root: null,
		sum: 0,
	};
	getLargestBSTSubtree(root, result);
	console.log(`${result.root}@${result.sum}`);
};
