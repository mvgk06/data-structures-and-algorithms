/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-search-tree/size-sum-max-min-find-in-bst-official/ojquestion

Approach
- Perform a dfs to traverse the bst and find the required results.
- Print the results.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const getSize = (root) => {
	if (root === null) {
		return 0;
	}
	const leftSize = getSize(root.left);
	const rightSize = getSize(root.right);
	return 1 + leftSize + rightSize;
};

const getSum = (root) => {
	if (root === null) {
		return 0;
	}
	const leftSum = getSum(root.left);
	const rightSum = getSum(root.right);
	return root.value + leftSum + rightSum;
};

const getMax = (root) => {
	if (root === null) {
		return -Number.MAX_VALUE;
	}
	if (root.right === null) {
		return root.value;
	}
	return getMax(root.right);
};

const getMin = (root) => {
	if (root === null) {
		return Number.MAX_VALUE;
	}
	if (root.left === null) {
		return root.value;
	}
	return getMin(root.left);
};

const findKey = (root, key) => {
	if (root === null) {
		return false;
	}
	if (root.value === key) {
		return true;
	} else if (root.value < key) {
		return findKey(root.right, key);
	}
	return findKey(root.left, key);
};

const solve = (root) => {
	console.log(getSize(root));
	console.log(getSum(root));
	console.log(getMax(root));
	console.log(getMin(root));
	console.log(findKey(root, key));
};
