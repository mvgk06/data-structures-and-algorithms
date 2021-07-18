/*

Problem

https://www.pepcoding.com/resources/online-java-foundation/stacks-and-queues/next-greater-element-official/ojquestion

Approach 

1.Traverse from right to left
- Traverse from the right, while the stack is not empty and the top is smaller than current, pop the element.
- If the stack is empty, then the result for the current index is -1, else the result is top of the stack.
- Push the current element into the stack.
- Return the result array.

Time - O(n)
Space - O(n)

2. Traverse from left to right
- Traverse from the left, while the stack is not empty and the top is smaller than current, the result for that index is the current element and pop the element.
- Push the current element into the stack.
- While the stack is not empty, pop the element and the result for that index is -1.
- Return the result array.

Time - O(n)
Space - O(n)

n - number of elements

*/

/* Traverse from right to left */

const nextGreater = (n, arr) => {
    const result = new Array(n);
    const stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length !== 0 && stack[stack.length - 1] < arr[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result[i] = -1;
        }
        else {
            result[i] = stack[stack.length - 1];
        }
        stack.push(arr[i]);
    }
    return result;
};

const solve = (n, arr) => {
    const result = nextGreater(n, arr);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};

/* Traverse from left to right */

const nextGreater2 = (n, arr) => {
    const result = new Array(n);
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        while (stack.length !== 0 && arr[stack[stack.length - 1]] < arr[i]) {
            result[stack[stack.length - 1]] = arr[i];
            stack.pop();
        }
        stack.push(i);
    }
    while (stack.length !== 0) {
        result[stack[stack.length - 1]] = -1;
        stack.pop();
    }
    return result;
};

const solve2 = (n, arr) => {
    const result = nextGreater2(n, arr);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};
