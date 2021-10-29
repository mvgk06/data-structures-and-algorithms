/*

Problem

https://leetcode.com/problems/binary-tree-inorder-traversal/

Approach

1. Recursive
- Recursively solve for the left subtree.
- Push the root into the result array.
- Recursively solve for the right subtree.
- If the root is null return.

Time - O(n)
Space - O(n)

2. Iterative
- Create a stack, and push the root along with 1 (it indicates the number of times we have visited the node).
- While the stack is not empty, get the top of the stack.
- If the top of the stack is visited once, then update the number of times visited as 2 and if the left child is not null then push the node along with 1.
- Else if the top of the stack is visited 2 times, then update the number of times visited as 3 and if the right child is not null then push the node along with 1.
- Push the top of the stack into the result.
- Else pop the top of the stack.
- Return the result.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* Recursive */

const inorderHelper = (root, result) => {
	if (root === null) {
		return;
	}
	inorderHelper(root.left, result);
	result.push(root.val);
	inorderHelper(root.right, result);
};

const inorderTraversal = function (root) {
	const result = [];
	inorderHelper(root, result);
	return result;
};

/* Iterative */

const inorderTraversal2 = function (root) {
	const result = [];
	const stack = [];
	stack.push([root, 1]);
	while (stack.length > 0) {
		const top = stack[stack.length - 1];
		if (top[1] === 1) {
			top[1]++;
			if (top[0].left != null) {
				stack.push([top[0].left, 1]);
			}
		} else if (top[1] === 2) {
			top[1]++;
			if (top[0].right != null) {
				stack.push([top[0].right, 1]);
			}
			result.push(top[0].val);
		} else {
			stack.pop();
		}
	}
	return result;
};
