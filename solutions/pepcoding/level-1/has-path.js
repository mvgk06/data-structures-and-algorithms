/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/has-path-official/ojquestion

Approach
- Mark the current node as visited.
- Traverse all the adjacent nodes of the current node.
- If the adjacent node is not yet visited, then recursively visit that node and if a path exist from the adjacent to the destination node, then return true.
- Return false if no path exists.
- If the destination node is reached, then return true.

Time - O(n+e)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

const hasPath = (graph, curr, dest, visited) => {
	if (curr === dest) {
		return true;
	}
	visited[curr] = true;
	for (const adjacent of graph[curr]) {
		if (!visited[adjacent]) {
			if (hasPath(graph, adjacent, dest, visited)) {
				return true;
			}
		}
	}
	return false;
};

const solve = (n, graph, src, dest) => {
	const visited = new Array(n + 1).fill(false);
	const result = hasPath(graph, src, dest, visited);
	console.log(result);
};
