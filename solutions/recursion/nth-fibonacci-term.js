/*

Recursion

Time - O(2^n)
Space - O(n)

*/

const fib = (n) => {

    if (n === 0 || n === 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);

};