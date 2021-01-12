/* 

Binary search

Time - O(n*log(sum))
Space - O(1)

*/

const isSplitPossible = (nums, m, mid) => {

    let sum = 0, count = 1;

    for (let i = 0; i < nums.length; i++) {
        if (sum + nums[i] <= mid) {
            sum += nums[i];
        }
        else {
            sum = nums[i];
            count++;
        }
        if (count > m) {
            return false;
        }
    }

    if (count <= m) {
        return true;
    }

    return false;
};

const splitArray = function (nums, m) {

    let sum = 0, max = -Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(max, nums[i]);
    }

    let start = max, end = sum, mid, result;

    while (start <= end) {

        mid = Math.floor(start + (end - start) / 2);

        if (isSplitPossible(nums, m, mid)) {
            result = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return result;

};