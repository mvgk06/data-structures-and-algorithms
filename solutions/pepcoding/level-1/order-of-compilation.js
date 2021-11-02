/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/compilation-order-official/ojquestion

Approach

1. BFS
- Store the indegree of all the nodes.
- Enqueue all the nodes that has zero indegree.
- While the queue is not empty, dequeue a node and print it.
- Traverse all the adjacent nodes and reduce its indegree. 
- If the indegree of the adjacent node becomes zero, then enqueue it into the queue.

Time - O(n)
Space - O(n)

2. DFS
- For each unvisited node perform dfs to visit the nodes.
- Mark the current node as visited.
- Traverse all the adjacent nodes of the current node.
- If the adjacent node is not yet visited, then recursively visit that node.
- Once all the adjacent nodes of the current node are visited push the current node into the stack.
- After visiting the nodes of each component, push the reverse of the stack (which gives the order of compilation of that component) into the result.
- Print the result.

Time - O(n)
Space - O(n)

n - number of nodes

*/

/* BFS */

const Queue = require('../../../data-structures/queue');

const solve = (graph) => {
	const n = graph.length;
	const indegree = new Array(n).fill(0);
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < graph[i].length; j++) {
			indegree[graph[i][j]]++;
		}
	}
	const queue = new Queue();
	for (let i = 0; i < n; i++) {
		if (indegree[i] === 0) {
			queue.enque(i);
		}
	}
	while (queue.getSize() > 0) {
		const curr = queue.getFront();
		queue.deque();
		console.log(curr);
		for (const adjacent of graph[curr]) {
			indegree[adjacent]--;
			if (indegree[adjacent] === 0) {
				queue.enque(adjacent);
			}
		}
	}
};

/* DFS */

const dfs = (graph, visited, curr, stack) => {
	visited[curr] = true;
	for (const adjacent of graph[curr]) {
		if (!visited[adjacent]) {
			dfs(graph, visited, adjacent, stack);
		}
	}
	stack.push(curr);
};

const solve2 = (graph) => {
	const n = graph.length,
		visited = new Array(n).fill(false),
		stack = [],
		result = [];
	for (let i = 0; i < n; i++) {
		if (!visited[i]) {
			dfs(graph, visited, i, stack);
			result.push(...stack.reverse());
		}
	}
	for (let i = 0; i < n; i++) {
		console.log(result[i]);
	}
};
