/*

Problem (follow up question)
https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

Approach
- For each cell (row,col) mark it as visited, try all four choices (u,r,d,l) and recursively solve the smaller sub problems.
- If you found a solution return true else backtrack, undo the choice that was made and try other choices.
- Once all the choices are explored mark the current cell as not visited and return false.
- If the current cell (row,col) is out of bounds or is blocked or is already visited then return false.
- If the destination cell (n-1,n-1) is reached then true to indicate that we have found a solution.

Time - O(2^n)
Space - O(m*n)

*/

class Solution {

    constructor() {
        this.currPath = "";
    }

    findPathHelper(mat, n, row, col, visited) {

        if (row < 0 || col < 0 || row === n || col === n || mat[row][col] === 0 || visited[row][col]) {
            return false;
        }

        if (row === n - 1 && col === n - 1) {
            return true;
        }

        visited[row][col] = 1;

        this.currPath += "U";
        if (this.findPathHelper(mat, n, row - 1, col, visited)) {
            return true;
        }
        this.currPath = this.currPath.substring(0, this.currPath.length - 1);

        this.currPath += "R";
        if (this.findPathHelper(mat, n, row, col + 1, visited)) {
            return true;
        }
        this.currPath = this.currPath.substring(0, this.currPath.length - 1);

        this.currPath += "D";
        if (this.findPathHelper(mat, n, row + 1, col, visited)) {
            return true;
        }
        this.currPath = this.currPath.substring(0, this.currPath.length - 1);

        this.currPath += "L";
        if (this.findPathHelper(mat, n, row, col - 1, visited)) {
            return true;
        }
        this.currPath = this.currPath.substring(0, this.currPath.length - 1);

        visited[row][col] = 0;

        return false;
    }

    findPath(m, n) {
        const visited = new Array(n);

        for (let i = 0; i < n; i++) {
            visited[i] = new Array(n).fill(0);
        }

        this.findPathHelper(m, n, 0, 0, visited);

        return this.currPath;
    }
}