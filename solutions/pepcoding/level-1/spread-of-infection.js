/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/infection-spread-official/ojquestion

Approach
- Initialize the result as 1.
- Start from the source node, visit all the nodes level by level and increment the result after visiting each node.
- Decrement the time after visiting each level.
- If all the nodes are visited or the time got over, then print the result.

Time - O(n+e)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

const Queue = require('../../../data-structures/queue');

const bfs = (graph, visited, src, time) => {
	const queue = new Queue();
	visited[src] = true;
	queue.enque(src);
	let result = 1;
	while (queue.getSize() > 0 && time > 0) {
		const size = queue.getSize();
		for (let i = 0; i < size; i++) {
			const curr = queue.getFront();
			queue.deque();
			for (const adjacent of graph[curr]) {
				if (!visited[adjacent]) {
					visited[adjacent] = true;
					queue.enque(adjacent);
					result++;
				}
			}
		}
		time--;
	}
	return result;
};

const solve = (n, graph, src, time) => {
	const visited = new Array(n).fill(false);
	const result = bfs(graph, visited, src, time - 1);
	console.log(result);
};
