/*

Approach
- Recursively solve the smaller sub problems.
- Print the current number.
- If the number becomes equal to 0 then return.

Time - O(n)
Space - O(n)

n - number

*/

const logNumbersInAscendingOrder = (n) => {

    if (n === 0) {
        return;
    }

    logNumbersInAscendingOrder(n - 1);
    console.log(n);
    return;
};