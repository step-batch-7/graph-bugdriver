const assert = require('chai').assert;
const graph = require('../src/graph');

describe('#bfs', function() {
  it('should give true if path found between two nodes', function() {
    const pairs = [
      ['a', 'b'],
      ['b', 'a'],
      ['b', 'c']
    ];
    const from = 'a';
    const to = 'c';
    assert.isTrue(graph.bfs(pairs, from, to));
  });
  it('should give false if not connected to itself', function() {
    const pairs = [
      ['a', 'b'],
      ['b', 'a'],
      ['c', 'b']
    ];
    const from = 'c';
    const to = 'c';
    assert.isFalse(graph.bfs(pairs, from, to));
  });
  it('should give false if path not found between two nodes', function() {
    const pairs = [
      ['a', 'b'],
      ['b', 'a'],
      ['b', 'c']
    ];
    const from = 'c';
    const to = 'a';
    assert.isFalse(graph.bfs(pairs, from, to));
  });
});
