/*

Problem
https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

Approach
- For each cell (row,col) mark it as visited, try all four choices (u,r,d,l) and recursively solve the smaller sub problems.
- Backtrack, undo the choice that was made (this will be taken care by recursion as strings are primitive) and try other choices.
- Once all choices are explored then mark the current cell as not visited and return.
- If the current cell (row,col) is out of bounds or is blocked or is already visited then return.
- If the destination cell (n-1,n-1) is reached then store the current path in the result.

Time - O(2^n)
Space - O(m*n)

*/

class Solution {

	findPathHelper(mat, n, row, col, visited, currPath, result) {

		if (row < 0 || col < 0 || row === n || col === n || mat[row][col] === 0 || visited[row][col]) {
			return;
		}

		if (row === n - 1 && col === n - 1) {
			result.push(currPath);
			return;
		}

		visited[row][col] = 1;

		this.findPathHelper(mat, n, row - 1, col, visited, currPath + "U", result);
		this.findPathHelper(mat, n, row, col + 1, visited, currPath + "R", result);
		this.findPathHelper(mat, n, row + 1, col, visited, currPath + "D", result);
		this.findPathHelper(mat, n, row, col - 1, visited, currPath + "L", result);

		visited[row][col] = 0;

		return;
	}

	findPath(m, n) {
		const result = [], visited = new Array(n);
		for (let i = 0; i < n; i++) {
			visited[i] = new Array(n).fill(0);
		}
		this.findPathHelper(m, n, 0, 0, visited, "", result);
		result.sort((a, b) => {
			if (a < b) {
				return -1;
			}
			return 1;
		});
		return result;
	}
}