/*

Approach
- Get the ending digit, convert it into a string.
- Recursively solve the smaller sub problems.
- If the number is less than 10 then this is the last digit, convert it into a string, add it to the result and return the result.

Time - O(n)
Space - O(n)

*/

const numberMap = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
};

const numberToString = (n, result) => {

    if (n < 10) {
        result += numberMap[n];
        return result;
    }

    const currDigit = n % 10;
    return numberToString(Math.floor(n / 10), result) + " " + numberMap[currDigit];
};