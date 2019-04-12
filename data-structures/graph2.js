/*

Implementing graph using hash table. Easier to test, but have to handle collissions and duplicates.

https://hackernoon.com/the-javascript-developers-guide-to-graphs-and-detecting-cycles-in-them-96f4f619d563

*/

function Graph() {
  this.adjList = {};
}

Graph.prototype.addVertex = function(vertex) {
  if (vertex in this.adjList) return;
  this.adjList[vertex] = [];
};

Graph.prototype.addEdge = function(vertex1, vertex2) {
  if (this.adjList[vertex1].includes(vertex2)) return;
  this.adjList[vertex1].push(vertex2);
};

module.exports = Graph;
