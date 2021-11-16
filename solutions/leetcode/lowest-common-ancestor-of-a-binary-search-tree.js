/*

Problem

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

Approach

1. Brute force
- Store all the ancestor nodes of p and q in an array.
- Traverse the array and find the lowest commmon ancestor.

Time - O(n)
Space - O(n)

2. Optimized
- If the value of the root is greater than the values of both p and q, then recursively get the lca on the left subtree.
- Else if the value of the root is smaller than the values of both both p and q, then recursively get the lca on the right subtree.
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
	if (root === key) {
		result.push(...path, root);
		return;
	}
	if (root.val > key.val) {
		path.push(root);
		getAncestors(root.left, key, path, result);
		path.pop();
	} else {
		path.push(root);
		getAncestors(root.right, key, path, result);
		path.pop();
	}
};

const lowestCommonAncestor = function (root, p, q) {
	const leftAncestors = [],
		rightAncestors = [];
	getAncestors(root, p, [], leftAncestors);
	getAncestors(root, q, [], rightAncestors);
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

/* Optimized */

const lowestCommonAncestor2 = function (root, p, q) {
	if (root.val > p.val && root.val > q.val) {
		return lowestCommonAncestor2(root.left, p, q);
	} else if (root.val < p.val && root.val < q.val) {
		return lowestCommonAncestor2(root.right, p, q);
	}
	return root;
};
