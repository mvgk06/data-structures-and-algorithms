/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-stair-paths-official/ojquestion

Approach

1. Recursion
- Recursively get the stair paths for smaller sub problem.
- Create a result array where we either climb 1, 2 or 3 steps along with the computed stair paths.
- Return the result array.
- If the current stair becomes equal to 0, then return an array with empty string. 
- If the current stair becomes less than 0, then return an empty array.

Time - O(3^n*k)
Space - O(k)

2. Backtracking
- For each index we have three choices either we climb 1,2 or 3 steps from the current stair.
- Recursively solve the smaller sub problems.
- If the index becomes equal to n, then push the current paths into the result and return.
- If the index becomes more than n, then return.

Time - O(3^n)
Space - O(k)

n - number of stairs
k - average number of ways

*/

/* Recursion */

const getStairPaths = (n, currStair) => {
    if (currStair === 0) {
        return [""];
    }
    if (currStair < 0) {
        return [];
    }
    const way1 = getStairPaths(n, currStair - 1);
    const way2 = getStairPaths(n, currStair - 2);
    const way3 = getStairPaths(n, currStair - 3);
    const result = [];
    for (let i = 0; i < way1.length; i++) {
        result.push(way1[i] + "1");
    }
    for (let i = 0; i < way2.length; i++) {
        result.push(way2[i] + "2");
    }
    for (let i = 0; i < way3.length; i++) {
        result.push(way3[i] + "3");
    }
    return result;
};

const solve = (n) => {
    const result = getStairPaths(n, n);
    result.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        return 1;
    });
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};

/* Backtracking */

const getStairPaths2 = (n, index, curr, result) => {
    if (index === n) {
        result.push(curr);
        return;
    }
    if (index > n) {
        return;
    }
    getStairPaths2(n, index + 1, curr + "1", result);
    getStairPaths2(n, index + 2, curr + "2", result);
    getStairPaths2(n, index + 3, curr + "3", result);
    return;
};

const solve2 = (n) => {
    const curr = "", result = [];
    getStairPaths2(n, 0, curr, result);
    result.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        return 1;
    });
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};