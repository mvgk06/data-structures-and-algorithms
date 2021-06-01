/*

Backtracking

Time - O(n^2)
Space - O(n)

*/

const isBalancedBrackets = (s) => {

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "(") {
            stack.push(s.charAt(i));
        }
        else {
            if (stack.length == 0) {
                return false;
            }
            else {
                if (stack[stack.length - 1] == "(") {
                    stack.pop();
                }
            }
        }
    }

    if (stack.length != 0) {
        return false;
    }

    return true;

};

const generateBrackets = (n, currIndex, currBracketPair) => {
    if (currIndex === 2 * n) {
        if (isBalancedBrackets(currBracketPair)) {
            console.log(currBracketPair);
        }
        return;
    }

    if (currIndex === 0) {
        generateBrackets(n, currIndex + 1, currBracketPair + "(");
    }
    else {
        generateBrackets(n, currIndex + 1, currBracketPair + "(");
        generateBrackets(n, currIndex + 1, currBracketPair + ")");
    }
    return;
};

const generateBalancedBrackets = (n) => {
    const currBracketPair = "";
    generateBrackets(n, 0, currBracketPair);
};


/*

Backtracking

Time - O(2^n)
Space - O(n)

*/

const generateBrackets2 = (n, currIndex, currBracketPair, openBrackets, closedBrackets) => {
    if (currIndex === 2 * n) {
        console.log(currBracketPair);
        return;
    }

    if (openBrackets < n) {
        generateBrackets(n, currIndex + 1, currBracketPair + "(", openBrackets + 1, closedBrackets);
    }

    if (closedBrackets < openBrackets) {
        generateBrackets(n, currIndex + 1, currBracketPair + ")", openBrackets, closedBrackets + 1);
    }

    return;
};

const generateBalancedBrackets2 = (n) => {
    const currBracketPair = "";
    generateBrackets2(n, 0, currBracketPair, 0, 0);
};