/* 

Binary search

Time - O(log n)
Space - O(1)

*/

const nextGreatestLetter = function (letters, target) {

    let start = 0, end = letters.length - 1, mid, result = letters[0];

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (letters[mid]>target) {
            result = letters[mid];
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return result;
};