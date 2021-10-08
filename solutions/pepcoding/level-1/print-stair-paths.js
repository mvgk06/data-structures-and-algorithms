/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-stair-paths-official/ojquestion

Approach
- At each index, we have three choices either we can climb 1, 2 or 3 steps from the current stair.
- After making a choice, recursively solve for the smaller sub problems.
- Backtrack, undo the choice that was made (this will be taken care by recursion as strings are passed by value) and try other choices.
- If the index becomes equal to n, then push the current path into the result and return.
- If the index becomes greater than n, then return.

Time - O(3^n)
Space - O(n+k)

n - number of stairs
k - number of ways

*/

const helper = (n, index, curr, result) => {
    if (index === n) {
        result.push(curr);
        return;
    }
    if (index > n) {
        return;
    }
    helper(n, index + 1, curr + "1", result);
    helper(n, index + 2, curr + "2", result);
    helper(n, index + 3, curr + "3", result);
    return;
};

const solve = (n) => {
    const curr = "", result = [];
    helper(n, 0, curr, result);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};