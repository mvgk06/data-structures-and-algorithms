/*

Problem

https://leetcode.com/problems/flood-fill/

Approach

1. DFS
- If the source cell is equal to the new color, then return the image.
- Perform dfs, visit all the cells with old color and change them to new color.
- Return the image.

Time - O(m*n)
Space - O(m*n)

2. BFS
- If the source cell is equal to the new color, then return the image.
- Perform bfs, visit all the cells with old color and change them to new color.
- Return the image.

Time - O(m*n)
Space - O(m*n)

m - number of rows 
n - number of columns

*/

/* DFS */

const dfs = (image, i, j, oldColor, newColor, paths) => {
    if (i < 0 || i >= image.length || j < 0 || j >= image[i].length || image[i][j] != oldColor) {
        return;
    }
    image[i][j] = newColor;
    for (let k = 0; k < paths.length; k++) {
        const row = i + paths[k][0], col = j + paths[k][1];
        dfs(image, row, col, oldColor, newColor, paths);
    }
};

const floodFill = function (image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) {
        return image;
    }
    const paths = [[1, 0], [0, 1], [-1, 0], [0, -1]], oldColor = image[sr][sc];
    dfs(image, sr, sc, oldColor, newColor, paths);
    return image;
};

/* BFS */

const Queue = require("../../data-structures/queue");

const isValid = (image, i, j, oldColor) => {
    return i >= 0 && i < image.length && j >= 0 && j < image[i].length && image[i][j] === oldColor;
};

const bfs = (image, i, j, oldColor, newColor, paths) => {
    const queue = new Queue();
    queue.enque([i, j]);
    while (queue.getSize() > 0) {
        const [row, col] = queue.getFront();
        queue.deque();
        image[row][col] = newColor;
        for (let k = 0; k < paths.length; k++) {
            const currRow = row + paths[k][0], currCol = col + paths[k][1];
            if (isValid(image, currRow, currCol, oldColor)) {
                queue.enque([currRow, currCol]);
            }
        }
    }
};

const floodFill2 = function (image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) {
        return image;
    }
    const paths = [[1, 0], [0, 1], [-1, 0], [0, -1]], oldColor = image[sr][sc];
    bfs(image, sr, sc, oldColor, newColor, paths);
    return image;
};