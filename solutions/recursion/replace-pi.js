/*

Approach
- If the current char is equal to p and next char is equal to i then replace it with 3.14.
- Recursively solve the smaller sub problems.
- If end of the array is reached then return the string.

Time - O(n)
Space - O(n)

n - size of string

*/

const replacePi = (s, currIndex) => {

    if (currIndex > s.length - 1) {
        return s;
    }

    if (s[currIndex] === "p" && s[currIndex + 1] === "i") {
        return replacePi(s.substring(0, currIndex) + "3.14" + s.substring(currIndex + 2, s.length), currIndex + 4);
    }

    return replacePi(s, currIndex + 1);
};