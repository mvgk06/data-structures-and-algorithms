/*

DFS

Time - O(n)
Space - O(n)

*/

const isSame=(curr1,curr2)=>{
    
    if(curr1===null && curr2===null){
        return true;
    }
    
    if(curr1===null || curr2===null){
        return false;
    }
    
    return curr1.val===curr2.val && isSame(curr1.left,curr2.left) && isSame(curr1.right,curr2.right);
    
}

const isSameTree = function(p, q) {
    return isSame(p,q);
};

/*

BFS

Time - O(n)
Space - O(n)

*/

const Deque=require("../../data-structures/deque.js");

const isSameTree2 = function(p, q) {
    
    if(p===null && q===null){
        return true;
    }
    
    if(p===null || q===null){
        return false;
    }
    
    const queue=new Deque();
    queue.push(p);
    queue.push(q);
    
    while(queue.getSize()>0){
        const curr1=queue.getFront();
        queue.deque();
        const curr2=queue.getFront();
        queue.deque();
        
        if(curr1===null && curr2===null){
            continue;
        }
        
        else if(curr1===null || curr2===null || curr1.val!=curr2.val){
            return false;
        }

        queue.push(curr1.left);
        queue.push(curr2.left);
        queue.push(curr1.right);
        queue.push(curr2.right);
    }
    
    return true;
    
};
