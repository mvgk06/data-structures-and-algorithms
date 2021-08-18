/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/graphs/knights-tour-official/ojquestion

Approach
- At each cell, we have 8 choices to make.
- Recursively choose each choice and visit the cells.
- Backtrack undo the choice that was made and try other choices.
- If all the cells are visited then print the moves made.

Time - O(8^(n^2))
Space - O(n^2)

n - number of cells

*/

const printGraph = (graph) => {
    const n = graph.length, m = graph[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m - 1; j++) {
            process.output.write(graph[i][j].toString() + " ");
        }
        process.output.write(graph[i][m - 1].toString());
        process.output.write("\n");
    }
    process.output.write("\n");
};

const helper = (graph, n, i, j, paths, move) => {
    if (i < 0 || i >= n || j < 0 || j >= n || graph[i][j] !== -1) {
        return;
    }
    if (move === n * n) {
        graph[i][j] = move;
        printGraph(graph);
        graph[i][j] = -1;
        return;
    }
    graph[i][j] = move;
    for (let k = 0; k < paths.length; k++) {
        const row = i + paths[k][0], col = j + paths[k][1];
        helper(graph, n, row, col, paths, move + 1);
    }
    graph[i][j] = -1;
};

const solve = (n, i, j) => {
    const graph = new Array(n);
    for (let i = 0; i < n; i++) {
        graph[i] = new Array(n).fill(-1);
    }
    const paths = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];
    helper(graph, n, i, j, paths, 1);
};