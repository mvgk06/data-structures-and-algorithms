/*

Recursion

Time - O(n)
Space - O(n)

*/

const logNumbersInAscendingOrder = (n) => {

    if (n === 0) {
        return;
    }

    logNumbersInAscendingOrder(n - 1);
    console.log(n);
    return;
};