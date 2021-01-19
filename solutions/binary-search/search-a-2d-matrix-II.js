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

/*

Modified binary search

Time - O(m+n)
Space - O(1)

*/

const searchMatrix2 = function(matrix, target) {

    let row=matrix.length-1,col=0;
    
    while(row>=0 && col<matrix[0].length){
        if(matrix[row][col]===target){
            return true;
        }
        else if(matrix[row][col]>target){
            row--;
        }
        else{
            col++;
        }
    }
    
    return false;
    
};