/*

Binary search

Time - O(log n)
Space - O(1)

*/

const peakIndexInMountainArray = function (arr) {

    let start = 0, end = arr.length - 1, mid;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if(mid===0){
            if(arr[mid]>arr[mid+1]){
                return mid;
            }
            start=mid+1;
        }
        else if(mid===arr.length-1){
            if(arr[mid]>arr[mid-1]){
                return mid;
            }
            end=mid-1;
        }
        else{
            if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]){
              return mid;  
            }
            else if(arr[mid]>arr[mid-1]){
                start=mid+1;
            }
            else{
                end=mid-1;
            }
        }
    }

    return -1;
};