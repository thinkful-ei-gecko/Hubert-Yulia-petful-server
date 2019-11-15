const PetsService = {
  peek(queue) {
    if (queue.first === null) {
      return 'Queue is empty';
    }
    return queue.first.value;
  }
};

module.exports = PetsService;