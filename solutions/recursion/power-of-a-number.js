/* 

Approach
- Multiply the current number with the smaller power (recursively solve the smaller sub problems).
- If the current number is equal to 1 then return n.

Time - O(m)
Space - O(m)

m - power

*/

const power = (n, m) => {

    if (m === 1) {
        return n;
    }

    return n * power(n, m - 1);

};