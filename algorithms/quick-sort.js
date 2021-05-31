/*

Recursive

Time - O(n*logn)
Space - O(n)

*/

const patrition = (arr, start, end) => {

    const pivot = arr[end];
    let pivotIndex = start;
    for (let i = start; i <= end - 1; i++) {
        if (arr[i] <= pivot) {
            const temp = arr[i];
            arr[i] = arr[pivotIndex];
            arr[pivotIndex] = temp;
            pivotIndex++;
        }
    }

    arr[end] = arr[pivotIndex];
    arr[pivotIndex] = pivot;
    return pivotIndex;
};

const quickSort = (arr, start, end) => {

    if (start >= end) {
        return;
    }

    const pivot = patrition(arr, start, end);
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);

    return;
};