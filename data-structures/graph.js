/*

Implementing graph using arrays (as opposed to hash table).

https://www.tutorialspoint.com/Graph-Data-Structure-in-Javascript

*/

function Graph () {
    this.nodes = [];
    this.edges = [];
}

Graph.prototype.addNode = function (node) {
    this.nodes.push(node);
    this.edges[node] = [];
}

Graph.prototype.addEdge = function (node1, node2, weight = 1) {
    this.edges[node1].push({ node: node2, weight: weight});
    this.edges[node2].push({ node: node1, weight: weight });
}

Graph.prototype.addDirectedEdge = function (node1, node2, weight = 1) {
    this.edges[node1].push({ node: node2, weight: weight});
}

Graph.prototype.display = function () {
    let graph = "";
    this.nodes.forEach(node => {
        graph += node + "->" + this.edges[node].map(n  => n.node).join(", ") + "\n";
    });
    console.log(graph);
}

let test = new Graph();
test.addNode(6);
test.addNode(2);
test.addEdge(2,6);
test.addNode(8);
test.addDirectedEdge(6,8);
test.display();

//console.log(test);