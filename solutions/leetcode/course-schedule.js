/*

Problem

https://leetcode.com/problems/course-schedule/

Approach

1. BFS
- Store the indegree of all nodes.
- Enque all the nodes that has zero indegree into the queue.
- While the queue is not empty, deque a node.
- Traverse all the adjacent nodes of the current node.
- Reduce the indegree of the adjacent node, if the indegree becomes zero, then enque it into the queue.
- If any one of the node is not visited, then the graph is cyclic.
- Else it is acyclic.
- If the graph is cyclic, then we can not finish the courses so return false.
- Else return true.

Time - O(n+e)
Space - O(n+e)

2. DFS
- For each unvisited node perform dfs to visit the nodes.
- Mark the current node as visited and active in the recursive call stack.
- Traverse all the adjacent nodes of the current node.
- If the adjacent node is not yet visited, then recursively visit that node and if a cycle exist, then return true.
- Else if the adjacent node is visited and its active in the recursive call stack, then return true.
- Once all the adjacent nodes of the current node is visited, mark the current node as inactive in the recursive call stack.
- Return false.
- If the graph is cyclic, then we can not finish the courses so return false.
- Else return true.

Time - O(n+e)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

/* BFS */

const Queue = require('../../data-structures/queue');

const isCyclic = (graph, indegree) => {
	const queue = new Queue();
	let visitedCount = 0;
	for (let i = 0; i < indegree.length; i++) {
		if (indegree[i] === 0) {
			visitedCount++;
			queue.enque(i);
		}
	}
	while (queue.getSize() > 0) {
		const curr = queue.getFront();
		queue.deque();
		for (const adjacent of graph[curr]) {
			indegree[adjacent]--;
			if (indegree[adjacent] === 0) {
				visitedCount++;
				queue.enque(adjacent);
			}
		}
	}
	if (visitedCount != graph.length) {
		return true;
	}
	return false;
};

const canFinish = function (numCourses, prerequisites) {
	const graph = new Array(numCourses);
	for (let i = 0; i < graph.length; i++) {
		graph[i] = [];
	}
	const indegree = new Array(graph.length).fill(0);
	for (const [curr, adjacent] of prerequisites) {
		graph[adjacent].push(curr);
		indegree[curr]++;
	}
	if (isCyclic(graph, indegree)) {
		return false;
	}
	return true;
};

/* DFS */

const isCyclic2 = (graph, visited, active, curr) => {
	visited[curr] = true;
	active[curr] = true;
	for (const adjacent of graph[curr]) {
		if (!visited[adjacent]) {
			if (isCyclic2(graph, visited, active, adjacent)) {
				return true;
			}
		} else if (visited[adjacent] && active[adjacent]) {
			return true;
		}
	}
	active[curr] = false;
	return false;
};

const canFinish2 = function (numCourses, prerequisites) {
	const graph = new Array(numCourses);
	for (let i = 0; i < graph.length; i++) {
		graph[i] = [];
	}
	for (const [curr, adjacent] of prerequisites) {
		graph[adjacent].push(curr);
	}
	const visited = new Array(graph.length).fill(false),
		active = new Array(graph.length).fill(false);
	for (let i = 0; i < visited.length; i++) {
		if (!visited[i]) {
			if (isCyclic2(graph, visited, active, i)) {
				return false;
			}
		}
	}
	return true;
};
