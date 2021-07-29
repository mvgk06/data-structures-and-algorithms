/*

Problem

https://leetcode.com/problems/valid-parentheses/

Approach
- If the recently processed opening bracket is not matching with the current closing bracket or there is no opening or closing bracket to match (check using a stack), 
then return false.
- Once the brackets are matched, then remove them from the stack.

Time - O(n)
Space - O(n)

n - number of elements

*/

const isOpeningBracket = (ch) => {
    return ch === "(" || ch === "[" || ch === "{";
};

const isMatchingBracket = (open, close) => {
    const map = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    return map[open] === close;
};

const isValid = function (s) {
    const stack = [];
    let i = 0;
    while (i < s.length) {
        if (isOpeningBracket(s[i])) {
            stack.push(s[i]);
        }
        else {
            if (stack.length === 0) {
                return false;
            }
            const top = stack[stack.length - 1];
            if (!isMatchingBracket(top, s[i])) {
                return false;
            }
            stack.pop();
        }
        i++;
    }
    if (stack.length != 0) {
        return false;
    }
    return true;
};