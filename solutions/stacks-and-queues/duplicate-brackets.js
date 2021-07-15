/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/stacks-and-queues/duplicate-brackets-official/ojquestion

Approach
- If there is an immediate opening bracket without any valid expression in between the opening and closing bracket, then it is a duplicate bracket.
- Keep pushing all the elements into a stack.
- If the current element is a closing bracket and if the stack top is an opening bracket, then return true.
- While the stack top is not an opening bracket, pop the elements.
- Pop the opening bracket.
- Once all elements are processed return false.

Time - O(n)
Space - O(n)

n - length of string

*/

const isOpeningBracket = (ch) => {
    return ch === "(" || ch === "[" || ch === "{";
};

const isClosingBracket = (ch) => {
    return ch === ")" || ch === "]" || ch === "}";
};

const duplicateBrackets = (s) => {
    const stack = [];
    let i = 0;
    while (i < s.length) {
        if (isClosingBracket(s[i])) {
            if (isOpeningBracket(stack[stack.length - 1])) {
                return true;
            }
            else {
                while (!isOpeningBracket(stack[stack.length - 1])) {
                    stack.pop();
                }
                stack.pop();
            }
        }
        else {
            stack.push(s[i]);
        }
        i++;
    }
    return false;
};

const solve = (s) => {
    const result = duplicateBrackets(s);
    console.log(result);
};