// We have to reorder the linked list with odd in the beginning and even at the end
var oddEvenLinkedList = function (head) {
  if (head === null) {
    return null;
  }
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

console.log(oddEvenLinkedList([1, 2, 3, 4, 5]));
