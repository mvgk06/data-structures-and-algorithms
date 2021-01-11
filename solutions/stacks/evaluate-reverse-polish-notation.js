/* 

Stack

Time - O(n)
Space - O(n)

*/

const isOperator = (operator) => {
    return operator === "+" || operator === "-" || operator === "*" || operator === "/";
};

const compute = (num2, num1, operator) => {
    if (operator === "+") {
        return num1 + num2;
    }
    if (operator === "-") {
        return num1 - num2;
    }
    if (operator === "*") {
        return num1 * num2;
    }
    return Math.trunc(num1 / num2);
};

const evalRPN = function (tokens) {

    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        if (isOperator(tokens[i])) {
            const currTotal = compute(stack.pop(), stack.pop(), tokens[i]);
            stack.push(currTotal);
        }
        else {
            stack.push(Number.parseInt(tokens[i]));
        }
    }

    return stack[stack.length - 1];

};