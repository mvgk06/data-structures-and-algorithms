/*

Recursion

Time - O(n)
Space - O(n)

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