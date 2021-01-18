/*

Brute force

Time - O(n^2)
Space - O(1)

*/

const maxArea = function (height) {

    let area = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const currArea = Math.min(height[i], height[j]) * (j - i);
            area = Math.max(area, currArea);
        }
    }

    return area;
};

/*

Two pointer

Time - O(n)
Space - O(1)

*/

const maxArea2 = function (height) {

    let area = 0, start = 0, end = height.length - 1;

    while (start < end) {
        const currArea = Math.min(height[start], height[end]) * (end - start);
        area = Math.max(area, currArea);
        if (height[start] < height[end]) {
            start++;
        }
        else {
            end--;
        }
    }

    return area;
};