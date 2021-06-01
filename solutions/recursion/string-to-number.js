/*

Recursion

Time - O(n)
Space - O(n)

*/

const stringToNumber = (num, result, currIndex) => {

    if (currIndex === num.length) {
        return result;
    }

    return stringToNumber(num, (result * 10) + parseInt(num.charAt(currIndex)), currIndex + 1);
};