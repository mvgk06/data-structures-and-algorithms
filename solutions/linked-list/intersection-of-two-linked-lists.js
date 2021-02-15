/*

Set

Time - O(n+m)
Space - O(max(n,m))

*/

const getIntersectionNode = function(headA, headB) {
    
    const set=new Set();
    
    let p1=headA, p2=headB;
    
    while(p1!=null){
        set.add(p1);
        p1=p1.next;
    }
    
    while(p2!=null){
        if(set.has(p2)){
            return p2;
        }
        p2=p2.next;
    }
    
    return null;
    
};

/*

Two pointer

Time - O(n+m)
Space - O(1)

*/

const getIntersectionNode2 = function(headA, headB) {
    
    if(headA===null || headB===null){
        return null;
    }
    
    let p1=headA, p2=headB;
    
    while(p1!=p2){
        p1=p1.next;
        p2=p2.next;
        if(p1===p2){
            return p1;
        }
        if(p1===null){
            p1=headB;
        }
        if(p2===null){
            p2=headA;
        }
    }
    
    return p1;
    
};