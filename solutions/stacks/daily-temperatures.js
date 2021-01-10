/*

Stack

Time - O(n)
Space - O(n)

*/

const getNearestGreatestOnRight = (temperatures) => {

    const right = new Array(temperatures.length), stack = [];
    let currIndex = temperatures.length - 1;

    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length != 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            right[currIndex] = 0;
        }
        else {
            right[currIndex] = stack[stack.length - 1] - i;
        }
        stack.push(i);
        currIndex--;
    }

    return right;

};

const dailyTemperatures = function (temperatures) {

    return getNearestGreatestOnRight(temperatures);

};