/*

Approach
- Get the current char, convert it into a number.
- Recursively solve the smaller sub problems.
- If the end of the array is reached then return the result.

Time - O(n)
Space - O(n)

n - size of string

*/

const stringToNumber = (num, result, currIndex) => {

    if (currIndex === num.length) {
        return result;
    }

    return stringToNumber(num, (result * 10) + parseInt(num.charAt(currIndex)), currIndex + 1);
};