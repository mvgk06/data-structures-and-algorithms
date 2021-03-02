/*

DFS

Time - O(n)
Space - O(n)

*/

const merge=(r1,r2)=>{
    if(r1===null && r2===null){
        return null;
    }
    if(r1===null){
        return r2;
    }
    if(r2===null){
        return r1;
    }
    const r3=new TreeNode(r1.val+r2.val);
    r3.left=merge(r1.left,r2.left);
    r3.right=merge(r1.right,r2.right);
    return r3;
}

const mergeTrees = function(root1, root2) {
    return merge(root1,root2);
};