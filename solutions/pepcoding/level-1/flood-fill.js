/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-backtracking/flood-fill-official/ojquestion

Approach
- Mark the current cell as visited.
- Recursively traverse the matrix and print all the paths from current to the destination cell.
- Backtrack, undo the choice that was made and try other choices.
- Mark the current cell as not visited.
- If the indices become out of bounds or the cell is visited or the cell is equal to 1, then return.
- If the destination cell is reached, then print the path and return.

Time - O(4^a)
Space - O(a+n*m)

n - number of rows
m - number of columns
a - length of the longest path

*/

const helper = (mat, i, j, visited, curr) => {
	if (
		i < 0 ||
		i >= mat.length ||
		j < 0 ||
		j >= mat[i].length ||
		visited[i][j] ||
		mat[i][j] === 1
	) {
		return;
	}
	if (i === mat.length - 1 && j === mat[i].length - 1) {
		console.log(curr);
		return;
	}
	visited[i][j] = true;
	helper(mat, i - 1, j, visited, curr + 't');
	helper(mat, i, j - 1, visited, curr + 'l');
	helper(mat, i + 1, j, visited, curr + 'd');
	helper(mat, i, j + 1, visited, curr + 'r');
	visited[i][j] = false;
};

const solve = (n, m, mat) => {
	const visited = new Array(n);
	for (let i = 0; i < n; i++) {
		visited[i] = new Array(m).fill(false);
	}
	const curr = '';
	helper(mat, 0, 0, visited, curr);
};
