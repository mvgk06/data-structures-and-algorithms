/*

Merge

Time - O(n*k^2)
Space - O(nk)

*/

const mergeTwoLists=(l1,l2)=>{
    
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
    
}

const mergeKLists = function(lists) {
    
    if(lists.length===0){
        return null;
    }
    
    if(lists.length===1){
        return lists[0];
    }
    
    let head=null;
    
    head=mergeTwoLists(lists[0]?lists[0]:null,lists[1]?lists[1]:null);
    
    for(let i=2;i<lists.length;i++){
        head=mergeTwoLists(head?head:null,lists[i]?lists[i]:null);
    }
    
    return head;
    
};

/*

Min Heap + Merge

Time - O(nklogk)
Space - O(nk)

*/

const Heap=require("../../data-structures/heap.js");

const mergeKLists2 = function(lists) {
    
    if(lists.length===0){
        return null;
    }
    
    const minHeap=new Heap((curr,parent)=>curr.key<parent.key);
    
    for(let i=0;i<lists.length;i++){
        if(lists[i]){
            minHeap.insert(lists[i].val,lists[i].next);
        }
    }
    
    let head=null, tail=null, isFirstNode=true;
    while(minHeap.getSize()>0){
        const currTop=minHeap.getTop();
        const currNode=new ListNode(currTop.key);
        if(isFirstNode){
            head=currNode;
            tail=currNode;
            isFirstNode=false;
        }
        else{
            tail.next=currNode;
            tail=currNode;
        }
        minHeap.deleteTop();
        if(currTop.value){
            minHeap.insert(currTop.value.val,currTop.value.next);  
        }
    }
    
    return head;
    
};