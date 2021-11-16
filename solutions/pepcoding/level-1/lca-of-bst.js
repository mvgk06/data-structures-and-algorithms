/*

Problem

https://pepcoding.com/resources/online-java-foundation/binary-search-tree/lca-bst-official/ojquestion

Approach

1. Brute force
- Store all the ancestor nodes of left and right in an array.
- Traverse the array and find the lowest commmon ancestor.

Time - O(n)
Space - O(n)

2. Optimized
- If the value of the root is greater than both left and right, then recursively get the lca on the left subtree.
- Else if the value of the root is smaller than both left and right, then recursively get the lca on the right subtree.
- Else return the root which is the lca of the bst.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* Brute force */

const getAncestors = (root, key, path, result) => {
	if (root === null) {
		return;
	}
	if (root.value === key) {
		result.push(...path, root.value);
		return;
	}
	if (root.value > key) {
		path.push(root.value);
		getAncestors(root.left, key, path, result);
		path.pop();
	} else {
		path.push(root.value);
		getAncestors(root.right, key, path, result);
		path.pop();
	}
};

const getLCA = (root, left, right) => {
	const leftAncestors = [],
		rightAncestors = [];
	getAncestors(root, left, [], leftAncestors);
	getAncestors(root, right, [], rightAncestors);
	let i = 0,
		j = 0,
		result = -1;
	while (i < leftAncestors.length && j < rightAncestors.length) {
		if (leftAncestors[i] === rightAncestors[j]) {
			result = leftAncestors[i];
		} else {
			break;
		}
		i++;
		j++;
	}
	return result;
};

const solve = (root, left, right) => {
	const result = getLCA(root, left, right);
	console.log(result);
};

/* Optimized */

const getLCA2 = (root, left, right) => {
	if (root.value > left && root.value > right) {
		return getLCA2(root.left, left, right);
	} else if (root.value < left && root.value < right) {
		return getLCA2(root.right, left, right);
	}
	return root.value;
};

const solve2 = (root, left, right) => {
	const result = getLCA2(root, left, right);
	console.log(result);
};
