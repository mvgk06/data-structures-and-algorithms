/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/print-nodes-k-away-binary-tree-official/ojquestion

Approach
- Find the node to root path.
- From each node in the path, traverse the required distance (which will be less than or equal to k) and push all the nodes into the result.
- Print the result.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const getNodeToRootPath = (root, key, path, result) => {
	if (root === null) {
		return false;
	}
	if (root.value === key) {
		result.push(...path, root);
		return true;
	}
	path.push(root);
	const isKeyFound =
		getNodeToRootPath(root.left, key, path, result) ||
		getNodeToRootPath(root.right, key, path, result);
	path.pop();
	return isKeyFound;
};

const getKthLevel = (root, k, level, result, blockValue) => {
	if (root === null || k < 0 || root.value === blockValue) {
		return;
	}
	if (level === k) {
		result.push(root.value);
	}
	getKthLevel(root.left, k, level + 1, result, blockValue);
	getKthLevel(root.right, k, level + 1, result, blockValue);
	return;
};

const solve = (root, key, k) => {
	const curr = [],
		path = [];
	getNodeToRootPath(root, key, curr, path);
	path.reverse();
	const result = [];
	for (let i = 0; i < path.length; i++) {
		getKthLevel(path[i], k - i, 0, result, i === 0 ? null : path[i - 1].value);
	}
	for (let i = 0; i < result.length; i++) {
		console.log(result[i]);
	}
};
