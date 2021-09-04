/*

Problem

https://leetcode.com/problems/best-sightseeing-pair/

Approach

1. Bottom up
- Initialize the left as the first element.
- Traverse the input and compte the score of the sight seeing pair if the current element is choosen as the second element of the pair.
- Update the result and the left.

Time - O(n)
Space - O(1)

2. Bottom up state machine
- When we are at the ith index, there are 3 possible states no element selected (s0), 1 element selected (s1), or 2 elements selected (s2).
- We can arrive at s1 either by staying at s1 already or by moving from s0 and picking an element at the current index.
- We can arrive at s2 either by staying at s2 already or by moving from s1 and picking an element at the current index.
- Update the result.

Time - O(n)
Space - O(1)

3. Optimal path
- If the current element is a better candidate for second element of the sight seeing pair, then set the right as current element.
- If the current element is a better candidate for first element of the sight seeing pair, then push it into the left array.
- Remove all the left values that are greater than or equal to the right.
- Return the last left along with the right.

Time - O(n)
Space - O(n)

n - number of elements

*/

/* Bottom up */

const maxScoreSightseeingPair = function (values) {
    let left = values[0], result = 0;
    for (let i = 1; i < values.length; i++) {
        const curr = left + values[i] - i;
        result = Math.max(result, curr);
        left = Math.max(left, values[i] + i);
    }
    return result;
};

/* Bottom up state machine */

const maxScoreSightseeingPair2 = function (values) {
    let s0 = 0, s1 = values[0], s2 = values[0], result = 0;
    for (let i = 1; i < values.length; i++) {
        const prevS0 = s0, prevS1 = s1, prevS2 = s2;
        s1 = Math.max(prevS1, prevS0 + values[i] + i);
        s2 = Math.max(prevS2, prevS1 + values[i] - i);
        result = Math.max(result, s2);
    }
    return result;
};

/* Optimal path */

const optimalPath = (values) => {
    const path = {
        left: [0],
        right: 0,
    };
    let left = values[0], result = 0;
    for (let i = 1; i < values.length; i++) {
        const curr = left + values[i] - i;
        if (curr > result) {
            path.right = i;
            result = curr;
        }
        if (values[i] + i > left) {
            path.left.push(i);
            left = values[i] + i;
        }
    }
    while (path.left[path.left.length - 1] >= path.right) {
        path.left.pop();
    }
    return [path.left[path.left.length - 1], path.right];
};