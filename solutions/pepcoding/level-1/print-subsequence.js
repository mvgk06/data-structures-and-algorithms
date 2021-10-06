/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-subsequence-official/ojquestion

Approach
- At each index we have two choices either we pick or don't pick the current element.
- After making a choice, recursively solve for the smaller sub problems.
- Backtrack, undo the choice that was made (this will be taken care by recursion as strings are passed by value) and try other choices.
- If the index becomes equal to the length of the string, then print the current subsequence and return.

Time - O(2^n)
Space - O(n)

n - size of the string

*/

const helper = (s, i, curr) => {
    if (i === s.length) {
        console.log(curr);
        return;
    }
    helper(s, i + 1, curr + s[i]);
    helper(s, i + 1, curr);
    return;
};

const solve = (s) => {
    const curr = "";
    helper(s, 0, curr);
};