// node ga_7-da.test.js

let graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2; 
graph["a"] = {};
graph["a"]["fin"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;
graph["fin"] = {};

/*
console.log(graph);
console.log(Object.keys(graph));
console.log(Object.keys(graph["start"]));
*/

let costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

//console.log(costs);

let parents = {};
parents['a'] = "start";
parents['b'] = "start";
parents['fin'] = null;

//console.log(parents);


