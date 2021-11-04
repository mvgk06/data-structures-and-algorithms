/*

Problem

https://leetcode.com/problems/course-schedule-ii/

Approach

1. BFS
- Store the indegree of all nodes.
- Enque all the nodes that has zero indegree into the queue.
- While the queue is not empty, deque a node and push it into the result.
- Traverse all the adjacent nodes of the current node.
- Reduce the indegree of the adjacent node, if the indegree becomes zero, then enque it into the queue.
- If the length of the result is not equal to the graph length, then the graph is cyclic.
- Else it is acyclic.
- If the graph is cyclic, then we can not finish the courses so return an empty array.
- Else return the order in which we can finish the courses.

Time - O(n+e)
Space - O(n+e)

2. DFS
- For each unvisited node perform dfs to visit the nodes.
- Mark the current node as visited and active in the recursive call stack.
- Traverse all the adjacent nodes of the current node.
- If the adjacent node is not yet visited, then recursively visit that node and if a cycle exist, then return true.
- Else if the adjacent node is visited and its active in the recursive call stack, then return true.
- Once all the adjacent nodes of the current node is visited, push the current node into the stack and mark the current node as inactive in the recursive call stack.
- Return false.
- If the graph is cyclic, then we can not finish the courses so return an empty array.
- Else return the order in which we can finish the courses.

Time - O(n+e)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

/* BFS */

const Queue = require('../../data-structures/queue');

const findOrderHelper = (graph, indegree, result) => {
	const queue = new Queue();
	for (let i = 0; i < indegree.length; i++) {
		if (indegree[i] === 0) {
			queue.enque(i);
		}
	}
	while (queue.getSize() > 0) {
		const curr = queue.getFront();
		queue.deque();
		result.push(curr);
		for (const adjacent of graph[curr]) {
			indegree[adjacent]--;
			if (indegree[adjacent] === 0) {
				queue.enque(adjacent);
			}
		}
	}
	if (result.length != graph.length) {
		return true;
	}
	return false;
};

const findOrder = function (numCourses, prerequisites) {
	const graph = new Array(numCourses);
	for (let i = 0; i < graph.length; i++) {
		graph[i] = [];
	}
	const indegree = new Array(graph.length).fill(0);
	for (const [curr, adjacent] of prerequisites) {
		graph[adjacent].push(curr);
		indegree[curr]++;
	}
	const result = [];
	if (findOrderHelper(graph, indegree, result)) {
		return [];
	}
	return result;
};

/* DFS */

const findOrderHelper2 = (graph, visited, active, curr, stack) => {
	visited[curr] = true;
	active[curr] = true;
	for (const adjacent of graph[curr]) {
		if (!visited[adjacent]) {
			if (findOrderHelper2(graph, visited, active, adjacent, stack)) {
				return true;
			}
		} else if (visited[adjacent] && active[adjacent]) {
			return true;
		}
	}
	stack.push(curr);
	active[curr] = false;
	return false;
};

const findOrder2 = function (numCourses, prerequisites) {
	const graph = new Array(numCourses);
	for (let i = 0; i < graph.length; i++) {
		graph[i] = [];
	}
	for (const [curr, adjacent] of prerequisites) {
		graph[adjacent].push(curr);
	}
	const visited = new Array(graph.length).fill(false),
		active = new Array(graph.length).fill(false),
		stack = [];
	for (let i = 0; i < visited.length; i++) {
		if (!visited[i]) {
			if (findOrderHelper2(graph, visited, active, i, stack)) {
				return [];
			}
		}
	}
	return stack.reverse();
};
