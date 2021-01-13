/*

Map + Binary search

Time (for 1 operation) - Set O(1) | Get O(logn)
Space - O(n)

*/

const TimeMapObject = function () {
    this.key;
    this.value;
    this.timestamp;
};

const TimeMap = function () {
    this.map = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
    const timeMapObject = new TimeMapObject();
    timeMapObject.key = key;
    timeMapObject.value = value;
    timeMapObject.timestamp = timestamp;

    if (this.map.has(key)) {
        this.map.get(key).push(timeMapObject);
    }
    else {
        this.map.set(key, [timeMapObject]);
    }
};

TimeMap.prototype.get = function (key, timestamp) {

    let arr = this.map.get(key);
    let start = 0, end = arr.length - 1, mid, result = -1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (arr[mid].timestamp <= timestamp) {
            result = mid;
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    if (result === -1) {
        return "";
    }

    return arr[result].value;
};
