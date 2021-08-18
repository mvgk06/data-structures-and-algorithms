/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/perfect-friends-official/ojquestion

Approach
- Each node in every component can pair with every other node of other components.
- Find the nodes in each of the components in the graph.
- Compute the number of ways to pair using the number of nodes in the components.

Time - O(n^2)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

const helper = (graph, visited, curr, component) => {
    visited[curr] = true;
    component.push(curr);
    for (const adjacent of graph[curr]) {
        if (!visited[adjacent]) {
            helper(graph, visited, adjacent, component);
        }
    }
};

const solve = (n, k, graph) => {
    const visited = new Array(n).fill(false), components = [];
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const curr = [];
            helper(graph, visited, i, curr);
            components.push(curr);
        }
    }
    let result = 0;
    for (let i = 0; i < components.length; i++) {
        for (let j = i + 1; j < components.length; j++) {
            result += components[i].length * components[j].length;
        }
    }
    console.log(result);
};