/*

Approach
- Print the current number.
- Recursively solve the smaller sub problems.
- If the number becomes equal to 0 then return.

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