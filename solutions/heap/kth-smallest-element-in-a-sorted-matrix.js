/*

Max Heap

Time - O(n^2)
Space - O(k)

*/

const MaxHeap = require("../../data-structures/max-heap.js")

const kthSmallest = function(matrix, k) {
    
    const maxHeap=new MaxHeap();
    
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            maxHeap.insert(matrix[i][j],matrix[i][j]);
            if(maxHeap.size>k){
                maxHeap.deleteMax();
            }
        }
    }
    
    return maxHeap.getMax().value;
    
};