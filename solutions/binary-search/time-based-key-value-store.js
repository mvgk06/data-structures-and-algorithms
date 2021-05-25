/*

Binary search

Time (for 1 operation) - Set O(1) | Get O(logn)
Space - O(n)

*/

const TimeMap = function () {
    this.store = {};
};

TimeMap.prototype.set = function (key, value, timestamp) {
    if(!this.store[key]){
        this.store[key]=[];
    }
    this.store[key].push({value,timestamp});
};

TimeMap.prototype.get = function (key, timestamp) {
    const arr=this.store[key];
    
    if(!arr){
        return "";
    }
    
    let start=0, end=arr.length-1, result="";
    while(start<=end){
        const mid=Math.floor(start+(end-start)/2);
        if(arr[mid].timestamp<=timestamp){
            result=arr[mid].value;
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    
    return result;
};
