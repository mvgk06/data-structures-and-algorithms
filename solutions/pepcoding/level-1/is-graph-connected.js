/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/is-graph-connected-official/ojquestion

Approach

1. DFS
- Perform dfs from the source node.
- Mark the current node as visited.
- Traverse all the adjacent nodes of the current node.
- If the adjacent node is not yet visited, then recursively visit that node.
- If any of the node is not visited, then print false.
- Else print true. 

Time - O(n+e)
Space - O(n+e)

2. BFS
- Perform bfs from the source node.
- Mark the current node as visited and enque it into the queue.
- While the queue is not empty, deque a node.
- Traverse all the adjacent nodes of the current node.
- If the adjacent node is not yet visited, then mark it as visited and enque it into the queue.
- If any of the node is not visited, then print false.
- Else print true. 

Time - O(n+e)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

/* DFS */

const dfs = (graph, curr, visited) => {
	visited[curr] = true;
	for (const adjacent of graph[curr]) {
		if (!visited[adjacent]) {
			dfs(graph, adjacent, visited);
		}
	}
};

const solve = (n, graph) => {
	const visited = new Array(n).fill(false);
	dfs(graph, 0, visited);
	for (let i = 0; i < visited.length; i++) {
		if (!visited[i]) {
			console.log(false);
			return;
		}
	}
	console.log(true);
};

/* BFS */

const Queue = require('../../../data-structures/queue.js');

const bfs = (graph, src, visited) => {
	const queue = new Queue();
	visited[src] = true;
	queue.enque(src);
	while (queue.getSize() > 0) {
		const curr = queue.getFront();
		queue.deque();
		for (const adjacent of graph[curr]) {
			if (!visited[adjacent]) {
				visited[adjacent] = true;
				queue.enque(adjacent);
			}
		}
	}
};

const solve2 = (n, graph) => {
	const visited = new Array(n).fill(false);
	bfs(graph, 0, visited);
	for (let i = 0; i < visited.length; i++) {
		if (!visited[i]) {
			console.log(false);
			return;
		}
	}
	console.log(true);
};
