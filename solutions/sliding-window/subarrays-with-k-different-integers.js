/*

Brute force

Time - O(n^2)
Space - O(n)

*/

const subarraysWithKDistinct = function(arr, k) {
    
    const set=new Set();
    let count=0;
    
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            set.add(arr[j]);
            if(set.size===k){
                count++;
            }
        }
        set.clear();
    }
    
    return count;
    
};

/* 

Sliding window + Map

Time - O(n)
Space - O(n)

*/

const subarraysWithAtmostKDistinct=(arr,k)=>{
    const map=new Map();
    let i=0,count=0;
    
    for(let j=0;j<arr.length;j++){   
        if(map.has(arr[j])){
            map.set(arr[j],map.get(arr[j])+1);
        }
        else{
            map.set(arr[j],1);
        }
        if(map.size>k){
            while(map.size>k && i<arr.length){
                map.set(arr[i],map.get(arr[i])-1);
                if(map.get(arr[i])===0){
                    map.delete(arr[i]);
                }
                i++;
            }
        }
        count+=(j-i+1);
    }
    
    return count;
}

const subarraysWithKDistinct2 = function(arr, k) {
    return subarraysWithAtmostKDistinct(arr,k)-subarraysWithAtmostKDistinct(arr,k-1);
};