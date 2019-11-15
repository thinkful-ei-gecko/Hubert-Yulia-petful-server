class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);
  
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
    if (this.first === null) {
      this.first = node;
    }
    //make the new node the last item on the queue
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = node.prev;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

module.exports = Queue;