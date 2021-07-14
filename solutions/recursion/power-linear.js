/* 

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/power-linear-official/ojquestion

Approach
- Multiply n with the smaller power of n (recursively solve the smaller sub-problems).
- If n is equal to 0, then return 1.

Time - O(m)
Space - O(m)

n - number
m - power

*/

const power = (n, m) => {
    if (m === 0) {
        return 1;
    }
    return n * power(n, m - 1);
};

const solve = (n, m) => {
    const result = power(n, m);
    console.log(result);
};