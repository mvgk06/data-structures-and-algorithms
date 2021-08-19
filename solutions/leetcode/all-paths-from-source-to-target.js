/*

Problem

https://leetcode.com/problems/all-paths-from-source-to-target/

Approach
- Go through all the adjacent nodes of the current node, push them into the path.
- Recursively find the paths from adjacent to the destination node.
- Backtrack, pop the adjacent node from the path and try other nodes.
- If the destination node is reached, then push the current path into the result and return.

Time - O(k^n)
Space - O(n)

k - maximum number of adjacent nodes
n - number of nodes from source to destination

*/

const allPaths = (graph, curr, dest, path, result) => {
    if (curr === dest) {
        result.push([...path]);
        return;
    }
    for (const adjacent of graph[curr]) {
        path.push(adjacent);
        allPaths(graph, adjacent, dest, path, result);
        path.pop();
    }
};

const allPathsSourceTarget = function (graph) {
    const n = graph.length;
    const path = [0], result = [];
    allPaths(graph, 0, n - 1, path, result);
    return result;
};