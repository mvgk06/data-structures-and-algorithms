/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/print-decreasing-official/ojquestion

Approach
- Print the current number.
- Recursively solve the smaller sub problems.
- If the number becomes equal to 0 then return.

Time - O(n)
Space - O(n)

n - number

*/

const printDecreasing = (n) => {
    if (n === 0) {
        return;
    }
    console.log(n);
    printDecreasing(n - 1);
};

const solve = (n) => {
    printDecreasing(n);
};