/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/perfect-friends-official/ojquestion

Approach
- Each node in every component can pair with every other node of other components.
- Find the number of nodes in each of the components in the graph.
- Compute the number of ways to pair using the number of nodes in the components.

Time - O(n+e)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

const dfs = (graph, visited, curr, component) => {
	visited[curr] = true;
	component.push(curr);
	for (const adjacent of graph[curr]) {
		if (!visited[adjacent]) {
			dfs(graph, visited, adjacent, component);
		}
	}
};

const solve = (n, k, graph) => {
	const visited = new Array(n).fill(false),
		components = [];
	for (let i = 0; i < n; i++) {
		if (!visited[i]) {
			const curr = [];
			dfs(graph, visited, i, curr);
			components.push(curr);
		}
	}
	let result = 0,
		currSumOfNodes = 0;
	for (let i = 0; i < components.length; i++) {
		currSumOfNodes += components[i].length;
		result += components[i].length * (n - currSumOfNodes);
	}
	console.log(result);
};
