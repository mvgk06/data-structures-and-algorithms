/*

DFS

Time - O(n)
Space - O(n)

*/

const pathSum=(curr,sum)=>{
    if(curr===null){
        return false;
    }
    
    if(curr.left===null && curr.right===null && sum-curr.val===0){
        return true;    
    }
    
    return pathSum(curr.left,sum-curr.val) || pathSum(curr.right,sum-curr.val);
}

const hasPathSum = function(root, targetSum) {
    return pathSum(root,targetSum);
};

/*

BFS

Time - O(n)
Space - O(n)

*/

const Deque=require("../../data-structures/deque.js");

const hasPathSum2 = function(root, targetSum) {
    
    if(root===null){
        return false;
    }
    
    const queue = new Deque();
    
    queue.push([root,targetSum]);
    
    while(queue.getSize()>0){
        const [curr,sum]=queue.getFront();
        queue.deque();
        
        if(curr.left===null && curr.right===null && (sum-curr.val)===0){
            return true;
        }
        
        if(curr.left!=null){
            queue.push([curr.left,sum-curr.val]);
        }
        
        if(curr.right!=null){
            queue.push([curr.right,sum-curr.val]);
        }
    }
    
    return false;
    
};