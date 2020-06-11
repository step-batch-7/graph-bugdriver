//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const createAdjacencyList = function(adjacencyList, pair) {
  const [from, to] = pair;
  if (!adjacencyList[from]) {
    adjacencyList[from] = [];
  }
  adjacencyList[from].push(to);
  return adjacencyList;
};

const bfs = function(pairs, source, target) {
  const adjacencyList = pairs.reduce(createAdjacencyList, {});
  const visitedNodes = [];
  const nodesToVisit = adjacencyList[source] && [...adjacencyList[source]];
  let currentNodetoVisit;
  while (nodesToVisit && nodesToVisit.length != 0) {
    currentNodetoVisit = nodesToVisit.shift();
    if (currentNodetoVisit == target) {
      return true;
    }
    visitedNodes.push(currentNodetoVisit);
    if (adjacencyList[currentNodetoVisit]) {
      adjacencyList[currentNodetoVisit].forEach(node => {
        if (!visitedNodes.includes(node) && !nodesToVisit.includes(node)) {
          nodesToVisit.push(node);
        }
      });
    }
  }
  return false;
};

module.exports = { bfs };
