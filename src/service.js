const Service = {
  peek(queue) {
    if (queue.first === null) {
      return 'Line is empty';
    }
    return queue.first.value;
  },
  getAllPeople(queue) {
    if (queue.first === null) {
      return 'Noone in the line';
    }
    let currNode = queue.first;
    let pList=[];

    while(currNode.prev !== null) {
      pList.push(currNode.value);
      currNode = currNode.prev;
    }
    pList.push(currNode.value);
    return pList;
  },
};

module.exports = Service;