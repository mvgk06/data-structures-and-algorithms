/*

Problem

https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/

Approach
- Rotate the matrix 4 times and after each rotation check if it is equal to the target matrix.

Time - O(n^2)
Space - O(n^2)

n - number of rows and columns

*/

const rotateAndCheck = (mat, target) => {
	const temp = new Array(mat.length);
	for (let i = 0; i < temp.length; i++) {
		temp[i] = new Array(mat.length);
	}
	let m = 0;
	for (let j = 0; j < mat.length; j++) {
		let n = 0;
		for (let i = mat.length - 1; i >= 0; i--) {
			temp[m][n] = mat[i][j];
			n++;
		}
		m++;
	}
	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat[i].length; j++) {
			mat[i][j] = temp[i][j];
		}
	}
	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat[i].length; j++) {
			if (mat[i][j] !== target[i][j]) {
				return false;
			}
		}
	}
	return true;
};

const findRotation = function (mat, target) {
	for (let i = 1; i <= 4; i++) {
		if (rotateAndCheck(mat, target)) {
			return true;
		}
	}
	return false;
};
