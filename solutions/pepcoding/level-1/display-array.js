/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/display-array-official/ojquestion

Approach
- Recursively print n-1 elements in the array.
- Print the current element.
- If n becomes equal to 0, then return.

Time - O(n)
Space - O(n)

n - number of elements

*/

const helper = (n, arr) => {
  if (n === 0) {
    return;
  }
  helper(n - 1, arr);
  console.log(arr[n - 1]);
};

const solve = (n, arr) => {
  helper(n, arr);
};
