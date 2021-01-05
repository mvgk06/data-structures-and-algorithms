/*

Recursion

Time - O(2^n)
Space - O(n)

*/

const movePlates = (n, src, dest, helper) => {
    if (n === 0) {
        return;
    }
    movePlates(n - 1, src, helper, dest);
    console.log(`Move from ${src} to ${dest}`);
    movePlates(n - 1, helper, dest, src);
};