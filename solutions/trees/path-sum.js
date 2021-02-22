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

