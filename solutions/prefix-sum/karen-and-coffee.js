/*

Problem
https://codeforces.com/contest/816/problem/B

Approach
- Use scanline prefix to compute number of recepies that recommended the current temperature.
- Using this array compute another prefix which determines the number of temperatues that is recommended by at least k recepies in the given range.

Time - O(n)
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

const main = () => {
    const [n, k, q] = readArr(), arr = new Array(n);

    let min = 200000, max = 1;
    for (let i = 0; i < n; i++) {
        arr[i] = readArr();
        min = Math.min(min, arr[i][0]);
        max = Math.max(max, arr[i][1]);
    }

    const pre1 = new Array(200001).fill(0), pre2 = new Array(200001).fill(0);

    for (let i = 0; i < n; i++) {
        pre1[arr[i][0]] += 1;
        pre1[arr[i][1] + 1] -= 1;
    }

    if (pre1[min] >= k) {
        pre2[min] = 1;
    }

    for (let i = min + 1; i <= 200001; i++) {
        pre1[i] += pre1[i - 1];
        if (pre1[i] >= k) {
            pre2[i] = pre2[i - 1] + 1;
        }
        else {
            pre2[i] = pre2[i - 1];
        }
    }

    for (let i = 0; i < q; i++) {
        const [a, b] = readArr();
        if (a === 0) {
            console.log(pre2[b]);
        }
        else {
            console.log(pre2[b] - pre2[a - 1]);
        }
    }
};