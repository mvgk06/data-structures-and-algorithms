/*

Problem (follow up question)
https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

Approach
- For each cell (row,col) mark it as visited, try all four choices (u,r,d,l) and recursively solve the smaller sub problems.
- Backtrack and try other choices.
- Once all the choices are explored then mark the current cell as not visited and return.
- If the current cell (row,col) is out of bounds or is blocked or is already visited then return.
- If the destination cell (n-1,n-1) is reached then increase the path count by 1.

Time - O(2^n)
Space - O(m*n)

*/

class Solution {

    constructor() {
        this.pathCount = 0;
    }

    findPathCountHelper(mat, n, row, col, visited) {

        if (row < 0 || col < 0 || row === n || col === n || mat[row][col] === 0 || visited[row][col]) {
            return;
        }

        if (row === n - 1 && col === n - 1) {
            this.pathCount++;
            return;
        }

        visited[row][col] = 1;

        this.findPathCountHelper(mat, n, row - 1, col, visited);
        this.findPathCountHelper(mat, n, row, col + 1, visited);
        this.findPathCountHelper(mat, n, row + 1, col, visited);
        this.findPathCountHelper(mat, n, row, col - 1, visited);

        visited[row][col] = 0;

        return;
    }

    findPathCount(m, n) {
        const visited = new Array(n);
        for (let i = 0; i < n; i++) {
            visited[i] = new Array(n).fill(0);
        }
        this.findPathCountHelper(m, n, 0, 0, visited);
        return this.pathCount;
    }
}
