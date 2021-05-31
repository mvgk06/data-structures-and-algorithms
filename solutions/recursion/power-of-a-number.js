/* 

Recursion

Time - O(n)
Space - O(n)

*/

const power = (n, m) => {

    if (m === 1) {
        return n;
    }

    return n * power(n, m - 1);

};