/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/print-zig-zag-official/ojquestion

Approach
- Print the current number on the sides after the smaller subproblem recursively printed the pattern.
- If n is 0, then return.

Time - O(n)
Space - O(n)

n - number

*/

const printZigzag = (n) => {
    if (n === 0) {
        return;
    }
    process.stdout.write(`${n} `);
    printZigzag(n - 1);
    process.stdout.write(`${n} `);
    printZigzag(n - 1);
    process.stdout.write(`${n} `);
};

const solve = (n) => {
    printZigzag(n);
};