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
        maxHeap.insert(map.get(key),key);
    }
        
    let output="";
    
    while(maxHeap.getSize()>0){
        const value=maxHeap.getMax().value;
        output+=value.repeat(map.get(value));
        maxHeap.deleteMax();
    }
    
    return output;
    
};