/*

Brute force

Time - O(n)
Space - O(1)

*/

const mergeTwoLists = function(l1, l2) {
    
    if(!l1 && !l2){
        return null;
    }
    
    if(!l1){
        return l2;
    }
    
    if(!l2){
        return l1;
    }
    
    let l3,head;
    
    if(l1.val<l2.val){
        l3=l1;
        l1=l1.next;
    }
    else{
        l3=l2;
        l2=l2.next;
    }
    
    head=l3;
    
    while(l1!=null && l2!=null){
        if(l1.val<l2.val){
            l3.next=l1;
            l3=l1;
            l1=l1.next;
        }
        else{
            l3.next=l2;
            l3=l2;
            l2=l2.next;
        }
    }
    
    if(!l1){
        l3.next=l2;
    }
    
    else if(!l2){
        l3.next=l1;
    }
    
    return head;
    
};