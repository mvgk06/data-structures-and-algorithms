/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/hamiltonian-official/ojquestion

Approach
- Mark the current node as visited.
- Traverse all the adjacent nodes of the current node.
- If the adjacent node is not yet visited, then recursively visit that node and update the path.
- Backtrack and mark the current node as not visited.
- If n-1 nodes are visited, then check if the current path forms a cycle and push it into the result and return.

Time - O(n^n)
Space - O(n)

n - number of nodes

*/

const getHamiltonianPathAndCycle = (graph, n, visited, src, curr, path, result) => {
	if (visited.size === n - 1) {
		const dest = parseInt(path[path.length - 1]);
		let isCycle = false;
		for (const adjacent of graph[src]) {
			if (adjacent === dest) {
				isCycle = true;
				break;
			}
		}
		if (isCycle) {
			result.push(path + '*');
		} else {
			result.push(path + '.');
		}
		return;
	}
	visited.add(curr);
	for (const adjacent of graph[curr]) {
		if (!visited.has(adjacent)) {
			getHamiltonianPathAndCycle(graph, n, visited, src, adjacent, path + adjacent, result);
		}
	}
	visited.delete(curr);
};

const solve = (graph, src) => {
	const n = graph.length,
		visited = new Set(),
		path = '',
		result = [];
	getHamiltonianPathAndCycle(graph, n, visited, src, src, path + src, result);
	for (let i = 0; i < result.length; i++) {
		console.log(result[i]);
	}
};
