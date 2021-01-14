/*

Recursion + Stack

Time - O(n)
Space - O(n)

*/

const getScore = (S, map, start, end) => {

    if (end === start + 1) {
        return 1;
    }

    const closingIndexOfStart = map.get(start);

    if (closingIndexOfStart === end) {
        return 2 * getScore(S, map, start + 1, end - 1);
    }

    return getScore(S, map, start, closingIndexOfStart) + getScore(S, map, closingIndexOfStart + 1, end);

};

const scoreOfParentheses = function (S) {

    const map = new Map(), stack = [];

    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) === '(') {
            stack.push(i);
        }
        else {
            map.set(stack.pop(), i);
        }
    }

    return getScore(S, map, 0, S.length - 1);

};

/*

Stack

Time - O(n)
Space - O(n)

*/

const scoreOfParentheses2 = function (S) {

    const stack = [0];
    let curr = 0;

    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) === "(") {
            stack.push(curr);
            curr = 0;
        }
        else {
            curr = stack.pop() + (2 * curr || 1);
        }
    }

    return curr;

};

/*

Without stack

Time - O(n)
Space - O(1)

*/

const scoreOfParentheses3 = function (S) {

    let result = 0, levels = 0;

    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) === "(") {
            levels++;
        }
        else {
            levels--;
        }
        if (S.charAt(i) === ")" && S.charAt(i - 1) === "(") {
            result += Math.pow(2, levels);
        }
    }

    return result;

};