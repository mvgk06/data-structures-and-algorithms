/*

Max Heap

Time - O(n^2)
Space - O(k)

*/

const Heap = require("../../data-structures/heap.js")

const kthSmallest = function(matrix, k) {
    
    const maxHeap=new Heap((curr,parent)=>curr.key>parent.key);
    
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            maxHeap.insert(matrix[i][j],matrix[i][j]);
            if(maxHeap.getSize()>k){
                maxHeap.deleteTop();
            }
        }
    }
    
    return maxHeap.getTop().value;
    
};