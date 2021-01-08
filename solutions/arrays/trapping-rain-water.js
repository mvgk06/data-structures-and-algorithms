/*

Pre computation

Time - O(n)
Space - O(n)

*/

const trap = function (height) {

    let leftMax = -1, rightMax = -1;
    const left = [], right = [];

    let i = 0, j = height.length - 1;

    while (i < height.length) {
        leftMax = Math.max(leftMax, height[i]);
        rightMax = Math.max(rightMax, height[j]);
        left[i] = leftMax;
        right[j] = rightMax;
        i++;
        j--;
    }

    let waterTrapped = 0;
    for (let i = 0; i < height.length; i++) {
        waterTrapped += (Math.min(left[i], right[i]) - height[i]);
    }

    return waterTrapped;
};