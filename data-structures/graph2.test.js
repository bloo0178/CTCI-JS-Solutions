const Graph = require("./graph2");

test("Graph2", () => {
  let test = new Graph();
  let expected = new Graph();
  expected.adjList = {
    A: ["B", "D", "C"],
    B: [],
    C: ["E"],
    D: ["E", "B"],
    E: ["B"]
  };
  test.addVertex("A");
  test.addVertex("B");
  test.addVertex("B");
  test.addVertex("C");
  test.addVertex("D");
  test.addVertex("E");
  test.addEdge("A", "B");
  test.addEdge("D", "E");
  test.addEdge("C", "E");
  test.addEdge("A", "D");
  test.addEdge("A", "C");
  test.addEdge("E", "B");
  test.addEdge("D", "B");
  test.addEdge("E", "B");
  expect(test).toEqual(expected);
});
