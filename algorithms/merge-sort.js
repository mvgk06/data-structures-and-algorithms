/* 

Recursive

Time - O(n*logn)
Space - O(n)

*/

const merge = (arr, start, end, mid) => {

    let i = start, j = mid + 1, k = start;
    const temp = new Array(arr.length).fill(0);

    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        }
        else {
            temp[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        temp[k++] = arr[i++];
    }

    while (j <= end) {
        temp[k++] = arr[j++];
    }

    for (let currIndex = start; currIndex <= end; currIndex++) {
        arr[currIndex] = temp[currIndex];
    }

};

const mergeSort = (arr, start, end) => {
    if (start >= end) {
        return;
    }
    const mid = Math.floor(start + (end - start) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, end, mid);
    return;
};