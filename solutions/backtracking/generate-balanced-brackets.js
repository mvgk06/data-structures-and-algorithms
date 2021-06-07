/*

Problem
https://leetcode.com/problems/generate-parentheses/

Approach
- The length of n pairs of balanced brackets is 2*n.
- For each index, I have two choices either I can have an open bracket or a closed bracket but inorder for the brackets to be balanced we have to check
    - If the number of opening brackets is less than n only then I choose an opening bracket.
    - If the number of opening brackets is greater than the closing brackets only then I choose a closing bracket.
- After making a choice, recursively solve the smaller sub problems.
- Backtrack, undo the choice that was made (this will be taken care by recursion as strings are primitive) and try other choices.
- If the length of current solution is equal to 2*n then store the current solution in the result. 

Time - O(2^n)
Space - O(n)

*/

const generateParenthesisHelper = (n, curr, openCount, closeCount, result) => {

    if (curr.length === 2 * n) {
        result.push(curr);
        return;
    }

    if (openCount < n) {
        generateParenthesisHelper(n, curr + "(", openCount + 1, closeCount, result);
    }

    if (openCount > closeCount) {
        generateParenthesisHelper(n, curr + ")", openCount, closeCount + 1, result);
    }

    return;
};

const generateParenthesis = function (n) {
    const result = [], curr = "";
    generateParenthesisHelper(n, curr, 0, 0, result);
    return result;
};