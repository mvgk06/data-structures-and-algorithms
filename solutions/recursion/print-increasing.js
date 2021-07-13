/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/print-increasing-official/ojquestion

Approach
- Recursively solve the smaller sub problems.
- Print the current number.
- If the number becomes equal to 0 then return.

Time - O(n)
Space - O(n)

n - number

*/

const printIncreasing = (n) => {
    if (n === 0) {
        return;
    }
    printIncreasing(n - 1);
    console.log(n);
};

const solve = (n) => {
    printIncreasing(n);
};