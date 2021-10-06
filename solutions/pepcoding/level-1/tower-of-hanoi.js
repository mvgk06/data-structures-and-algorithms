/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/toh-official/ojquestion

Approach
- Recursively move n-1 plates from src to helper using dest.
- Move the last plate from src to dest.
- Recursively move n-1 plates from helper to dest using src.

Time - O(2^n)
Space - O(n)

n - number of plates

*/

const helper = (n, src, dest, helper) => {
    if (n === 0) {
        return;
    }
    helper(n - 1, src, helper, dest);
    console.log(`${n}[${src} -> ${dest}]`);
    helper(n - 1, helper, dest, src);
};

const solve = (n, src, dest, helper) => {
    helper(n, src, dest, helper);
};