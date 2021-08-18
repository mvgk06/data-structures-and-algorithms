/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/print-all-paths-official/ojquestion

Approach
- Mark the current node as visited.
- Go through all the adjacent nodes of the current node and recursively print all the paths from the adjacent to the destination node.
- If the current node is already visited, then return.
- If the destination node is reached, then print the path and return.

Time - O(k^n)
Space - O(n)

k - maximum number of adjacent nodes
n - number of nodes from source to destination

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
    for (const adj of graph[curr]) {
        printAllPaths(graph, adj, dest, visited, path + adj);
    }
    visited[curr] = false;
};

const solve = (n, graph, src, dest) => {
    const visited = new Array(n + 1).fill(false);
    printAllPaths(graph, src, dest, visited, src.toString());
};