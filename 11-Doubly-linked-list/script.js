class Node {
  constructor(data, prev = null, next = null) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Insert at first
  insertFirst(data) {
    let current = this.head;
    let node = new Node(data);
    if (current) {
      node.next = this.head;
      current.prev = node;
    } else {
      node.next = current;
    }
    this.head = node;
    this.size++;
    return;
  }
  // Insert at last
  insertLast(data) {
    let current = this.head;
    let node = new Node(data);
    if (current) {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    } else {
      this.head = current;
    }
    node.prev = current;
    this.size++;
    return;
  }

  // Print data
  printListData() {
    let current = this.head;
    while (current) {
      // console.log(current.data);
      console.log(current);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertLast(500);

linkedList.printListData();

console.log(linkedList);
