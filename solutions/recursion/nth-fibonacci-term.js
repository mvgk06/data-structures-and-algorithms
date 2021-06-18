/*

Approach
- Recursively solve the problem for n-1 and n-2, adding these two solutions will give the solution for n.
- If n becomes 0 or 1 then return n.

Time - O(2^n)
Space - O(n)

n - number

*/

const fib = (n) => {

    if (n === 0 || n === 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);

};