// Definition for singly-linked list.
function Node(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(val) {
    this.head = new Node(val, this.head);
    this.size++;
  }
}

// li & l2 are two linked list
var addTwoNumbers = (l1, l2) => {
  let head = new Node(0);
  let linkedList1 = l1;
  let linkedList2 = l2;
  let current = head;
  let carry = 0;

  while (linkedList1 !== null || linkedList2 !== null) {
    let x = linkedList1 !== null ? linkedList1.val : 0;
    let y = linkedList2 !== null ? linkedList2.val : 0;

    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    current.next = new Node(sum % 10);
    current = current.next;

    if (linkedList1 !== null) {
      linkedList1 = linkedList1.next;
    }
    if (linkedList2 !== null) {
      linkedList2 = linkedList2.next;
    }

    if (carry > 0) {
      current.next = new Node(1);
    }
  }

  return head.next;
};

const l1 = new LinkedList();
const l2 = new LinkedList();

l1.insert(3);
l1.insert(4);
l1.insert(2);

l2.insert(4);
l2.insert(6);
l2.insert(5);

console.log(addTwoNumbers(l1.head, l2.head)); // [7 0 8]
