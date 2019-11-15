const PetsService = {
  peek(queue) {
    if (queue.first === null) {
      return 'Line is empty';
    }
    return queue.first.value;
  }
};

module.exports = PetsService;