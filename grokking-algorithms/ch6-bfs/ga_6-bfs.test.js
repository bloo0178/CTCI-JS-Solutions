const Graph = require('../../data-structures/graph2'); 
const search = require('./ga_6-bfs');

let testData = new Graph();
testData.adjList = {
    "you": ["alice", "bob", "claire"],
    "bob": ["anuj", "peggy"],
    "alice": ["peggy"],
    "claire": ["thom", "jonny"],
    "anuj": [],
    "peggy": [],
    "thom": [],
    "jonny": []
}

test("Grokking Algorithms Ch6 - BFS", () => {
    expect(search('you', testData)).toBe(true);
})
