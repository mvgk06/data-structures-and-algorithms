/* 

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/power-logarithmic-official/ojquestion

Approach
- If m is even, then return the square of power of n where m is reduced by half.
- Else return n times the square of power of n where m-1 is reduced by half.
- If n is equal to 0, then return 1.

Time - O(log(m))
Space - O(log(m))

n - number
m - power

*/

const power = (n, m) => {
    if (m === 0) {
        return 1;
    }
    if (m % 2 === 0) {
        return power(n, m / 2) * power(n, m / 2);
    }
    return n * power(n, (m - 1) / 2) * power(n, (m - 1) / 2);
};

const solve = (n, m) => {
    const result = power(n, m);
    console.log(result);
};