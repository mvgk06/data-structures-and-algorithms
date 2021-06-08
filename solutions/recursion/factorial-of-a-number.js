/*

Approach
- Multiply the current number with the factorial of the smaller number (recursively solve the smaller sub problems).
- If the current number becomes 0 then return 1;

Time - O(n)
Space - O(n)

*/

const factorial = (n) => {

    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);

};