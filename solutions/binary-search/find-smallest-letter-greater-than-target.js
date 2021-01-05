/* 

Binary search

Time - O(log n)
Space - O(1)

*/

const nextGreatestLetter = function (letters, target) {

    let start = 0, end = letters.length - 1, mid, result = -1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (letters[mid].charCodeAt(0) > target.charCodeAt(0)) {
            result = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    if (result === -1) {
        return letters[0];
    }

    return letters[result];
};