// node ga_7-da.test.js
// npm test -- ga_7-da.test.js
const dijkstra = require("./ga_7-da");

const graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;
graph["a"] = {};
graph["a"]["finish"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["finish"] = 5;
graph["finish"] = {};

const graph2 = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {}
};

test("Grokking Algorithms Ch7 - Dijkstra's Algorithm - Test1", () => {
  expect(dijkstra(graph)).toEqual({
    distance: 6,
    path: ["start", "b", "a", "finish"]
  });
});

test("Grokking Algorithms Ch7 - Dijkstra's Algorithm - Test2", () => {
    expect(dijkstra(graph2)).toEqual({
      distance: 8,
      path: ["start", "A", "D", "finish"]
    });
  });
