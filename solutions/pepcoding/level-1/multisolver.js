/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/mutilsovler-graph-official/ojquestion

Approach
- Perform dfs, find all the paths (along with it's weight) from source to destination and store them in the result.
- Sort the paths in the increasing order of weights.
- Print the required results.

Time - O(n^n)
Space - O(n^2)

n - number of nodes

*/

const dfs = (graph, dest, visited, curr, weight, path, result) => {
	if (visited[curr]) {
		return;
	}
	if (curr === dest) {
		result.push(`${path}@${weight}`);
	}
	visited[curr] = true;
	for (const [adjacent, adjacentWeight] of graph[curr]) {
		dfs(graph, dest, visited, adjacent, weight + adjacentWeight, path + adjacent, result);
	}
	visited[curr] = false;
	return;
};

const solve = (n, graph, src, dest, criteria, k) => {
	const visited = new Array(n + 1).fill(false);
	const result = [];
	dfs(graph, dest, visited, src, 0, src.toString(), result);
	result.sort((first, second) => {
		const firstPathWeight = parseInt(first.split('@')[1]),
			secondPathWeight = parseInt(second.split('@')[1]);
		if (firstPathWeight < secondPathWeight) {
			return -1;
		}
		return 1;
	});
	console.log(`Smallest Path = ${result[0]}`);
	console.log(`Largest Path = ${result[result.length - 1]}`);
	for (let i = 0; i < result.length; i++) {
		const currPathWeight = parseInt(result[i].split('@')[1]);
		if (currPathWeight > criteria) {
			console.log(`Just Larger Path than ${criteria} = ${result[i]}`);
			break;
		}
	}
	for (let i = result.length - 1; i >= 0; i--) {
		const currPathWeight = parseInt(result[i].split('@')[1]);
		if (currPathWeight < criteria) {
			console.log(`Just Smaller Path than ${criteria} = ${result[i]}`);
			break;
		}
	}
	console.log(`${k}th largest path = ${result[result.length - k]}`);
};
