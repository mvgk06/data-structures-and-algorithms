/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/display-array-in-reverse/ojquestion

Approach
- Print the current element.
- Recursively print n-1 elements in the array.
- If n becomes equal to 0, then return.

Time - O(n)
Space - O(n)

n - number of elements

*/

const helper = (n, arr) => {
    if (n === 0) {
        return;
    }
    console.log(arr[n - 1]);
    helper(n - 1, arr);
};

const solve = (n, arr) => {
    helper(n, arr);
};
