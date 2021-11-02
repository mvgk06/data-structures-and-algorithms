/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/is-cyclic-official/ojquestion

Approach

1. DFS
- For each unvisited node perform dfs to visit the nodes.
- Mark the current node as visited.
- Traverse all the adjacent nodes of the current node.
- If the adjacent node is not yet visited, recursively visit that node and if a cycle exist, then return true.
- Else if the adjacent node is visited and it is not equal to the parent node, then return true.
- Else return false.

Time - O(n+e)
Space - O(n+e)

2. BFS
- For each unvisited node perform bfs to visit the nodes.
- Mark the current node as visited and enque it along with its parent (-1) as a pair into the queue.
- While the queue is not empty, deque a pair containing a node and its parent.
- Traverse all the adjacent nodes of the current node.
- If the adjacent node is not yet visited, mark it as visited, enque it along with its parent (current node) as a pair into the queue.
- Else if the adjacent node is visited and it is not equal to the parent node, then return true.
- Else return false.

Time - O(n+e)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

/* DFS */

const dfs = (graph, visited, curr, parent) => {
	visited[curr] = true;
	for (const adjacent of graph[curr]) {
		if (!visited[adjacent]) {
			const isCyclic = dfs(graph, visited, adjacent, curr);
			if (isCyclic) {
				return true;
			}
		} else if (visited[adjacent] && adjacent != parent) {
			return true;
		}
	}
	return false;
};

const solve = (n, graph) => {
	const visited = new Array(n).fill(false);
	let result = false;
	for (let i = 0; i < n; i++) {
		if (!visited[i]) {
			const isCyclic = dfs(graph, visited, i, -1);
			if (isCyclic) {
				result = true;
				break;
			}
		}
	}
	console.log(result);
};

/* BFS */

const Queue = require('../../../data-structures/queue');

const bfs = (graph, visited, curr) => {
	const queue = new Queue();
	visited[curr] = true;
	queue.enque([curr, -1]);
	while (queue.getSize() > 0) {
		const [curr, parent] = queue.getFront();
		queue.deque();
		for (const adjacent of graph[curr]) {
			if (!visited[adjacent]) {
				visited[adjacent] = true;
				queue.enque([adjacent, curr]);
			} else if (visited[adjacent] && adjacent != parent) {
				return true;
			}
		}
	}
	return false;
};

const solve2 = (n, graph) => {
	const visited = new Array(n).fill(false);
	let result = false;
	for (let i = 0; i < n; i++) {
		if (!visited[i]) {
			const isCyclic = bfs(graph, visited, i);
			if (isCyclic) {
				result = true;
				break;
			}
		}
	}
	console.log(result);
};
