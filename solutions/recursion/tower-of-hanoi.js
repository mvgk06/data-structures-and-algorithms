/*

Approach
- Recursively move n-1 plates from src to helper using dest.
- Move the last plate from src to dest.
- Recursively move n-1 plates from helper to dest using src.

Time - O(2^n)
Space - O(n)

n - number of plates

*/

const movePlates = (n, src, dest, helper) => {
    if (n === 0) {
        return;
    }
    movePlates(n - 1, src, helper, dest);
    console.log(`Move from ${src} to ${dest}`);
    movePlates(n - 1, helper, dest, src);
};