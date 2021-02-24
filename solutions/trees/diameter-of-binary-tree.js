/*

DFS

Time - O(n)
Space - O(n)

*/

const diameterOfBinaryTree = function(root) {
    if(root===null){
        return 0;
    }
    
    let diameter=0;
    
    const getHeight=(curr)=>{
        if(curr===null){
            return 0;
        }
        const leftHeight=getHeight(curr.left), rightHeight=getHeight(curr.right);
        diameter=Math.max(diameter,leftHeight+rightHeight);
        return 1+Math.max(leftHeight,rightHeight);
    }

    getHeight(root);
    
    return diameter;
};
