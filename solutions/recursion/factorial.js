/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/factorial-official/ojquestion

Approach
- Multiply the current number with the factorial of the smaller number (recursively solve the smaller sub problems).
- If the current number becomes 0 then return 1;

Time - O(n)
Space - O(n)

n - number

*/

const fact = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
};

const solve = () => {
    const n = parseInt(read());
    const result = fact(n);
    console.log(result);
};