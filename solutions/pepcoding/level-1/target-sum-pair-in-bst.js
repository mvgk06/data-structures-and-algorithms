/*

Problem

https://pepcoding.com/resources/online-java-foundation/binary-search-tree/tsp-bst-official/ojquestion

Approach
- If the value of the current node is not in the solution set and the other node that sums to the given target is found, then print the values of both the nodes and add them into the set.
- Recursively solve for both the left and the right subtree.
- If the current node is null, then return.

Time - O(n^2)
Space - O(n)

n - number of nodes

*/

const search = (root, blockedRef, key) => {
	if (root === null) {
		return false;
	}
	if (root !== blockedRef && root.value === key) {
		return true;
	} else if (root.value > key) {
		return search(root.left, blockedRef, key);
	}
	return search(root.right, blockedRef, key);
};

const printTargetSumPairs = (root, curr, target, set) => {
	if (curr === null) {
		return;
	}
	const key = Math.abs(target - curr.value);
	if (!set.has(curr.value) && search(root, curr, key)) {
		console.log(`${curr.value} ${key}`);
		set.add(curr.value);
		set.add(key);
	}
	printTargetSumPairs(root, curr.left, target, set);
	printTargetSumPairs(root, curr.right, target, set);
};

const solve = (root, target) => {
	const set = new Set();
	printTargetSumPairs(root, root, target, set);
};
