/*

Stack

Time - O(n)
Space - O(n)

*/

const isOpeningBracket = (bracket) => {
    return bracket === "(" || bracket === "{" || bracket === "[";
};

const isValid = function (string) {

    const matchingBracket = new Map();

    matchingBracket.set(")", "(");
    matchingBracket.set("}", "{");
    matchingBracket.set("]", "[");

    const stack = [];

    for (let i = 0; i < string.length; i++) {
        if (isOpeningBracket(string[i])) {
            stack.push(string[i]);
        }
        else {
            if (stack.length != 0 && matchingBracket.get(string[i]) === stack[stack.length - 1]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }

    if (stack.length != 0) {
        return false;
    }

    return true;
};