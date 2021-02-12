/*

Max Heap + Map

Time - O(nlogn)
Space - O(n)

*/

const Heap=require("../../data-structures/heap.js");

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
    
    const maxHeap = new Heap((curr,parent)=>curr.key>parent.key);
    
    for(let key of map.keys()){
        maxHeap.insert(map.get(key),key);
    }
        
    let output="";
    
    while(maxHeap.getSize()>0){
        const value=maxHeap.getTop().value;
        output+=value.repeat(map.get(value));
        maxHeap.deleteTop();
    }
    
    return output;
    
};