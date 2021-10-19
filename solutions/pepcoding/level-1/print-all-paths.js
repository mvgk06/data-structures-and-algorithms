/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/print-all-paths-official/ojquestion

Approach
- Mark the current node as visited.
- Recursively visit all the adjacent nodes of the current node.
- Backtrack and mark the current node as not visited.
- If the current node is already visited, then return.
- If the destination node is reached, then print the path and return.

Time - O(n^n)
Space - O(n)

n - number of nodes

*/

const printAllPaths = (graph, curr, dest, visited, path) => {
	if (visited[curr]) {
		return;
	}
	if (curr === dest) {
		console.log(path);
		return;
	}
	visited[curr] = true;
	for (const adjacent of graph[curr]) {
		printAllPaths(graph, adjacent, dest, visited, path + adjacent);
	}
	visited[curr] = false;
};

const solve = (n, graph, src, dest) => {
	const visited = new Array(n + 1).fill(false);
	printAllPaths(graph, src, dest, visited, src.toString());
};
