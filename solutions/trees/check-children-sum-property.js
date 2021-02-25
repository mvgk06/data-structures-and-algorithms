/*

DFS

Time - O(n)
Space - O(n)

*/

const checkProperty=(curr)=>{
    if(curr===null || (curr.left===null && curr.right===null)){
        return true;
    }
    let sum=0;
    if(curr.left!=null){
        sum+=curr.left.val;
    }
    if(curr.right!=null){
        sum+=curr.right.val;
    }
    return curr.val===sum && checkProperty(curr.left) && checkProperty(curr.right);
}

const checkChildrenSumProperty=(root)=>{
    return checkProperty(root);
}