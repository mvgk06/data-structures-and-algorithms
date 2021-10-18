/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-in-arrays/all-indices-official/ojquestion

Approach
- If the current element is equal to the key, then push it to the result.
- Recursively find all the matching indices from the rest of the elements.
- If the index becomes equal to the length of the array, then return.

Time - O(n)
Space - O(n)

n - number of elements

*/

const helper = (arr, key, i, result) => {
  if (i === arr.length) {
    return;
  }
  if (arr[i] === key) {
    result.push(i);
  }
  helper(arr, key, i + 1, result);
};

const solve = (arr, key) => {
  const result = [];
  helper(arr, key, 0, result);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
};
