const Service = {
  peek(queue) {
    if (queue.first === null) {
      return 'Line is empty';
    }
    return queue.first.value;
  },
  getAll(queue) {
    if (queue.first === null) {
      return 'You are first in line and can adopt a pet now';
    }
    let currNode = queue.first;
    console.log(currNode);
    let personList=[];
    while(currNode.value !== null) {
      console.log(currNode);
      personList.push(currNode.value);
      currNode = currNode.next;
    }
    return personList;
  }
};

module.exports = Service;