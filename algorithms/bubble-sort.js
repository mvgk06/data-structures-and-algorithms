/* 

Iterative

Time - O(n^2)
Space - O(1)

*/

const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

};


/* 

Recursive

Time - O(n^2)
Space - O(n)

*/

const bubbleSortRecursive = (arr, currIndex, pass) => {

    if (pass === 1) {
        return;
    }

    if (currIndex === arr.length - 1) {
        bubbleSortRecursive(arr, 0, pass - 1);
        return;
    }

    if (arr[currIndex] > arr[currIndex + 1]) {
        const temp = arr[currIndex];
        arr[currIndex] = arr[currIndex + 1];
        arr[currIndex + 1] = temp;
    }

    bubbleSortRecursive(arr, currIndex + 1, pass);
    return;
};