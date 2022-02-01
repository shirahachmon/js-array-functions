function ListNode(value, next) {
    this.value = (value === undefined ? 0 : value);
    this.next = (next === undefined ? null : next);
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    add(element) {
        let currentNode
        let node = new ListNode(element)
        if (this.head == null) {
            this.head = node
        } else {
            currentNode = this.head
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            // CurrentNode now is the last node in the list
            currentNode.next = node
        }
        this.size++
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(value, next) {
 *     this.value = (value===undefined ? 0 : value)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let output = new LinkedList()
    let currentNode1 = l1
    let currentNode2 = l2
    let borrow = 0
    while(currentNode1 || currentNode2) {
        // if one or the other still valueid
        let valueNode1 = currentNode1 ? currentNode1.value : 0
        let valueNode2 = currentNode2 ? currentNode2.value : 0
        let sum = valueNode1 + valueNode2 + borrow
        if (sum >= 10) {
            sum = sum % 10
            borrow = 1
        } else {
            borrow = 0
        }

        output.add(sum)
        currentNode1 = currentNode1 ? currentNode1.next : undefined
        currentNode2 = currentNode2 ? currentNode2.next : undefined
    }
    if (borrow > 0) output.add(1)
    return output.head
};

// let l1= new ListNode([2,4,3])
// let l2= new ListNode([5,6,4])
function linkedList(arr){
    return arr.reduceRight((next, value) => ({value, next}), null);
  }
  
  l1 = [3, 1, 2, 3, 4, 5];
  l2 = [3, 1, 2, 3, 4, 5];
document.addEventListener('submit', function(event) {
    console.log(addTwoNumbers(linkedList(l1),linkedList(l2)));
})

  
//   console.log(linkedList(l));