/*

Problem
https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/rest-in-peace-21-1/

Approach
- If the number is divisible by 21 or if 21 exist in the string then print "The streak is broken!".
- Else print "The streak lives still in our heart!".

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

const main = () => {

    const tc = parseInt(read());
    let i = 0;
    while (i < tc) {

        const s = read();

        let resultFound = false;
        for (let i = 0; i < s.length - 1; i++) {
            if (s.charAt(i) === "2" && s.charAt(i + 1) === "1") {
                console.log("The streak is broken!");
                resultFound = true;
                break;
            }
        }

        if (!resultFound) {
            if (parseInt(s) % 21 === 0) {
                console.log("The streak is broken!");
            }
            else {
                console.log("The streak lives still in our heart!");
            }
        }

        i++;
    }
};
