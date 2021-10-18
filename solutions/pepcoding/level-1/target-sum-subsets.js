/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-backtracking/target-sum-subsets-official/ojquestion

Approach
- At each index, we have two choices either we can pick or dont pick the current element.
- After making a choice, recursively solve for the smaller sub problems.
- Backtrack, undo the choice that was made and try other choices.
- If the end of the array is reached and if the sum is equal to the target, then print the current subset and return.

Time - O(2^n)
Space - O(n)

n - number of elements

*/

const helper = (arr, i, curr, sum, target) => {
  if (i === arr.length) {
    if (sum === target) {
      console.log(curr);
    }
    return;
  }
  curr.push(arr[i]);
  helper(arr, i + 1, curr, sum + arr[i], target);
  curr.pop();
  helper(arr, i + 1, curr, sum, target);
  return;
};

const solve = (arr, target) => {
  const curr = [];
  helper(arr, 0, curr, 0, target);
};
