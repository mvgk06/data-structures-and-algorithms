/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/stacks-and-queues/balanced-brackets-official/ojquestion

Approach
- There are three cases when the brackets are invalid, the opening brackets are more than closing, the closing brackets are more than opening and the opening bracket 
is not matching the closing bracket.
- Keep pushing the opening brackets into the stack.
- If the current element is a closing bracket and if the stack is empty, then return false.
- Else if the top is not matching, then return false.
- Else pop the opening bracket.
- Once all the elements are processed, if the stack is not empty, then return false.
- Else return true.

Time - O(n)
Space - O(n)

n - size of string

*/

const isOpeningBracket = (ch) => {
    return ch === "(" || ch === "[" || ch === "{";
};

const isClosingBracket = (ch) => {
    return ch === ")" || ch === "]" || ch === "}";
};

const isMatchingBracket = (open, close) => {
    const map = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    return map[open] === close;
};

const balancedBrackets = (s) => {
    const stack = [];
    let i = 0;
    while (i < s.length) {
        if (isOpeningBracket(s[i])) {
            stack.push(s[i]);
        }
        else if (isClosingBracket(s[i])) {
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

    if (stack.length !== 0) {
        return false;
    }

    return true;
};

const solve = (s) => {
    const result = balancedBrackets(s);
    console.log(result);
};