/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/has-path-official/ojquestion

Approach
- Mark the current node as visited.
- Go through all the adjacent nodes of the current node and recursively check if a path exists from the adjacent to the destination node.
- If the path exists, then return true.
- Else try other adjacent nodes.
- Return false if no path exists.
- If the current node is already visited, then return false.
- If the destination node is reached, then return true.

Time - O(n+e)
Space - O(n+e)

n - number of nodes
e - number of edges

*/

const hasPath = (graph, curr, dest, visited) => {
    if (visited[curr]) {
        return false;
    }
    if (curr === dest) {
        return true;
    }
    visited[curr] = true;
    for (const adj of graph[curr]) {
        if (hasPath(graph, adj, dest, visited)) {
            return true;
        }
    }
    return false;
};

const solve = (n, graph, src, dest) => {
    const visited = new Array(n + 1).fill(false);
    const result = hasPath(graph, src, dest, visited);
    console.log(result);
};