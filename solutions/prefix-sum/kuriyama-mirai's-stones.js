/*

Problem
https://codeforces.com/contest/433/problem/B

Approach
- Use a prefix array to compute the sum of elements in the given range.

Time - O(nlog(n))
Space - O(n)

*/

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
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

const solve = (type, l, r, pre1, pre2) => {
    if (type === 1) {
        if (l === 0) {
            console.log(pre1[r]);
        }
        else {
            console.log(pre1[r] - pre1[l - 1]);
        }
    }
    else if (type === 2) {
        if (l === 0) {
            console.log(pre2[r]);
        }
        else {
            console.log(pre2[r] - pre2[l - 1]);
        }
    }
};

const main = () => {
    const n = parseInt(read());
    const arr1 = readArr();
    const m = parseInt(read());
    let arr2 = [...arr1];
    arr2 = arr2.sort((a, b) => {
        if (a <= b) return -1;
        return 1;
    });

    const pre1 = new Array(arr1.length), pre2 = new Array(arr1.length);
    pre1[0] = arr1[0];
    pre2[0] = arr2[0];

    for (let i = 1; i < arr1.length; i++) {
        pre1[i] = arr1[i] + pre1[i - 1];
        pre2[i] = arr2[i] + pre2[i - 1];
    }

    for (let i = 1; i <= m; i++) {
        const [type, l, r] = readArr();
        solve(type, l - 1, r - 1, pre1, pre2);
    }
};