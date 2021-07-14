/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/max-of-an-array-official/ojquestion

Approach
- Recursively find the maximum for n-1 elements.
- If the current element is greater than the maximum so far, then return it.
- Else return the maximum so far.
- If n becomes equal to 0, then return -1.

Time - O(n)
Space - O(n)

n - number of elements

*/

const maxOfArr = (n, arr) => {
    if (n === 0) {
        return -1;
    }
    const maxSoFar = maxOfArr(n - 1, arr);
    if (arr[n - 1] > maxSoFar) {
        return arr[n - 1];
    }
    return maxSoFar;
};

const solve = (n, arr) => {
    const result = maxOfArr(n, arr);
    console.log(result);
};