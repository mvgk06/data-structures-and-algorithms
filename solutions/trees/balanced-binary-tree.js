/*

DFS

Time - O(n)
Space - O(n)

*/

const getHeight=(curr)=>{
    if(curr===null){
        return 0;
    }
    const leftHeight=getHeight(curr.left);
    
    if(leftHeight===-1){
        return -1;
    }
    
    const rightHeight=getHeight(curr.right);
    
    if(rightHeight===-1){
        return -1;
    }
    
    if(Math.abs(leftHeight-rightHeight)>1){
        return -1;
    }
    
    return 1+Math.max(leftHeight,rightHeight);
}

const isBalanced = function(root) {
    if(root===null){
        return true;
    }
    return getHeight(root)!=-1;
};