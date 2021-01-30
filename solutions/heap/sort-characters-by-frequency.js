/*

Max Heap + Map

Time - O(nlogn)
Space - O(n)

*/

const MaxHeap=require("../../data-structures/max-heap.js");

const frequencySort = function(s) {
    
    const map=new Map();
    
    for(let i=0;i<s.length;i++){
        if(map.has(s.charAt(i))){
            map.set(s.charAt(i),map.get(s.charAt(i))+1);
        }
        else{
            map.set(s.charAt(i),1);
        }
    }
    
    const maxHeap = new MaxHeap();
    
    for(let key of map.keys()){
        const currObject={};
        currObject.key=map.get(key);
        currObject.value=key;
        maxHeap.insert(currObject);
    }
        
    let output="";
    
    while(maxHeap.getSize()>0){
        const value=maxHeap.getMax();
        output+=value.repeat(map.get(value));
        maxHeap.deleteMax();
    }
    
    return output;
    
};