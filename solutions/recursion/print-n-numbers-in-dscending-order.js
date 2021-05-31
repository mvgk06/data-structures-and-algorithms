/*

Recursion

Time - O(n)
Space - O(n)

*/

const logNumbersInDscendingOrder = (n) => {

    if (n === 0) {
        return;
    }

    console.log(n);
    logNumbersInDscendingOrder(n - 1);
    return;
};