var MyStack = function () {
  this.queue = new Queue();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  let rotations = this.queue.size();
  this.queue.enqueue(x);
  while (rotations > 0) {
    this.queue.enqueue(this.queue.dequeue());
    rotations--;
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue.peek();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.isEmpty();
};

class Queue {
  constructor() {
    this.storage = [];
    this.last = 0;
    this.first = 0;
  }
  peek() {
    return this.storage[this.first];
  }
  size() {
    return this.last - this.first;
  }
  isEmpty() {
    return this.last === this.first;
  }
  dequeue() {
    let first = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return first;
  }
  enqueue(val) {
    this.storage[this.last] = val;
    this.last++;
  }
}

var myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top()); // return 2
console.log(myStack.pop()); // return 2
console.log(myStack.empty()); // return False
