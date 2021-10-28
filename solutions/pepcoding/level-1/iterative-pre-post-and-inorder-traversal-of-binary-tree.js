/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/binary-tree/iterative-pre-post-in-binary-tree-official/ojquestion

Approach
- Create a stack and push the root along with 1 as a pair (here 1 indicates the number of times we have visited the node).
- While the stack is not empty, get the top of the stack.
- If the top node is visited once, then push it's value into the preorder array and if the left child is not null, then push it along with 1 as a pair.
- Increment the number of times visited for the top node by 1.
- Else if the top node is visited twice, then push it's value into the inorder array and if the right child is not null, then push it along with 1 as a pair.
- Increment the number of times visited for the top node by 1.
- Else push the top node's value into the postorder array and pop the top of the stack.
- Print the result.

Time - O(n)
Space - O(n)

n - number of nodes

*/

const printOrder = (order) => {
	for (let i = 0; i < order.length; i++) {
		process.stdout.write(order[i] + ' ');
	}
	process.stdout.write('\n');
};

const solve = (root) => {
	const stack = [],
		preOrder = [],
		inOrder = [],
		postOrder = [];
	stack.push([root, 1]);
	while (stack.length > 0) {
		const top = stack[stack.length - 1];
		if (top[1] === 1) {
			preOrder.push(top[0].value);
			if (top[0].left != null) {
				stack.push([top[0].left, 1]);
			}
			top[1]++;
		} else if (top[1] === 2) {
			inOrder.push(top[0].value);
			if (top[0].right != null) {
				stack.push([top[0].right, 1]);
			}
			top[1]++;
		} else {
			postOrder.push(top[0].value);
			stack.pop();
		}
	}
	printOrder(preOrder);
	printOrder(inOrder);
	printOrder(postOrder);
};
