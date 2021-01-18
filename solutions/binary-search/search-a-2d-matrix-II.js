/*

Binary search for each row

Time - O(m*log(n))
Space - O(1)

*/

const elementFoundInCurrentRow = (matrix, target, row) => {

    let start = 0, end = matrix[row].length, mid;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (matrix[row][mid] === target) {
            return true;
        }
        else if (matrix[row][mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return false;
};

const searchMatrix = function (matrix, target) {


    for (let i = 0; i < matrix.length; i++) {
        if (elementFoundInCurrentRow(matrix, target, i)) {
            return true;
        }
    }

    return false;

};

