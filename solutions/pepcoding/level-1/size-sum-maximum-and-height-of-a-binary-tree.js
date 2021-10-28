/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/size-sum-max-height-binarytree-official/ojquestion

Approach
- Perform dfs to find the height of the tree.
- Update the result during the traversal.
- Print the result.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const getHeight = (root, result) => {
	if (root === null) {
		return -1;
	}
	result.size++;
	result.sum += root.value;
	result.max = Math.max(result.max, root.value);
	const leftHeight = getHeight(root.left, result);
	const rightHeight = getHeight(root.right, result);
	return 1 + Math.max(leftHeight, rightHeight);
};

const solve = (root) => {
	const result = {
		size: 0,
		sum: 0,
		max: 0,
		height: 0,
	};
	const currHeight = getHeight(root, result);
	result.height = currHeight;
	console.log(result.size);
	console.log(result.sum);
	console.log(result.max);
	console.log(result.height);
};
