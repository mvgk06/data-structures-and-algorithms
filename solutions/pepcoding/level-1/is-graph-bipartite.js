/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/is-bipartite-official/ojquestion

Approach

1. DFS
- For each uncolored node perform dfs to color it.
- If the current node is not yet colored, then color it with the current color.
- Traverse all the adjacent nodes of the current node.
- If the adjacent node is not yet colored, then recursively color it with the opposite color of the current node and check if the graph is bipartite.
- If the graph is not bipartite, then return false.
- Else the adjacent node is already colored and the adjacent color is same as current color, then return false.
- Else return true.

Time - O(n+e)
Space - O(n+e)

2. BFS
- For each uncolored node perform bfs to color it.
- Color the current node with a color and enque it into the queue.
- While the queue is not empty, deque a node.
- Traverse all the adjacent nodes of the current node.
- If the adjacent node is not yet colored, then color it with the opposite color of the current node and enque it into the queue.
- Else the adjacent node is already colored and the adjacent color is same as current color, then return false.
- Else return true.

Time - O(n+e)
Space - O(n+e)

n - number of nodes 
e - number of edges

*/

/* DFS */

const dfs = (graph, colors, curr, color) => {
	if (colors[curr] === -1) {
		colors[curr] = color;
	}
	for (const adjacent of graph[curr]) {
		if (colors[adjacent] === -1) {
			const isBipartite = dfs(graph, colors, adjacent, colors[curr] === 0 ? 1 : 0);
			if (!isBipartite) {
				return false;
			}
		} else if (colors[adjacent] != -1 && colors[adjacent] === colors[curr]) {
			return false;
		}
	}
	return true;
};

const solve = (n, graph) => {
	const colors = new Array(n).fill(-1);
	let result = true;
	for (let i = 0; i < colors.length; i++) {
		if (colors[i] === -1) {
			if (!dfs(graph, colors, i, 0)) {
				result = false;
				break;
			}
		}
	}
	console.log(result);
};

/* BFS */

const Queue = require('../../../data-structures/queue');

const bfs = (graph, colors, src) => {
	const queue = new Queue();
	queue.enque(src);
	colors[src] = 0;
	while (queue.getSize() > 0) {
		const curr = queue.getFront();
		queue.deque();
		for (const adjacent of graph[curr]) {
			if (colors[adjacent] === -1) {
				colors[adjacent] = colors[curr] === 0 ? 1 : 0;
				queue.enque(adjacent);
			} else if (colors[adjacent] != -1 && colors[adjacent] === colors[curr]) {
				return false;
			}
		}
	}
	return true;
};

const solve2 = (n, graph) => {
	const colors = new Array(n).fill(-1);
	let result = true;
	for (let i = 0; i < colors.length; i++) {
		if (colors[i] === -1) {
			if (!bfs(graph, colors, i)) {
				result = false;
				break;
			}
		}
	}
	console.log(result);
};
