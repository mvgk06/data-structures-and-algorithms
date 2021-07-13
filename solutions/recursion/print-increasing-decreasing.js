/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/introduction-to-recursion/print-increasing-decreasing-official/ojquestion

Approach
- Print the current number.
- Recursively solve the smaller sub problems.
- Print the current number.
- If the number becomes equal to 0 then return.

Time - O(n)
Space - O(n)

n - number

*/

const printIncDec = (n) => {
    if (n === 0) {
        return;
    }
    console.log(n);
    printIncDec(n - 1);
    console.log(n);
};

const solve = (n) => {
    printIncDec(n);
};