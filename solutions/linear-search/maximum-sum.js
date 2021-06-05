/*

Problem 
https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/maximum-sum-4-f8d12458/

Approach
- Add the current element only if it increases the sum.
- If all elements are negative then print the element with maximum value.

Time - O(n)
Space - O(1)

*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
let currLine = 0;

rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    main();
});

const read = () => {
    return input[currLine++];
};

const readArr = () => {
    return input[currLine++].split(" ").map(e => parseInt(e));
};

const main = () => {

    const n = parseInt(read());
    const arr = readArr();

    let sum = 0, count = 0, max = -1e9;
    for (let i = 0; i < n; i++) {
        if (sum + arr[i] >= sum) {
            sum += arr[i];
            count += 1;
        }
        max = Math.max(max, arr[i]);
    }

    if (count === 0) {
        console.log(max, 1);
    }
    else {
        console.log(sum, count);
    }
};