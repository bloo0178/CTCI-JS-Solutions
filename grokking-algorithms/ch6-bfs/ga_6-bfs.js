/*

Implemented a breadth-first search of a graph data structure using the example illustrated throughout Chapter 6 of Grokking Algorithms. The function "search" should return true if any connected contacts are mango sellers. A mango seller, as defined by the book and the function "personIsSeller", is anyone whose last name ends with the letter 'm'. This is breadth-first because all first-level contacts are searched first, then second-level, etc. As contacts are determined to not be sellers, their contacts are added to the end of the searchQueue. The process continues until the searchQueue is empty. 

*/

// Checks if last name ends with m; if so, they are a seller.
function personIsSeller(person) {
  if (person[person.length - 1] === "m") return true;
  return false;
}

// BFS using name and a graph to find a seller (using function "personIsSeller").
function search(name, graph) {
  // Creates new searchQueue
  let searchQueue = [];
  // Adds name's contacts to searchQueue
  searchQueue = graph.adjList[name];
  // Array to keep track of who has been searched already.
  let searched = [];
  while (searchQueue.length !== 0) {
    let person = searchQueue.shift();
    // Only search the person if they haven't already been searched
    if (searched.includes(person) === false) {
      if (personIsSeller(person)) return true;
      else {
        for (let i = 0; i < graph.adjList[person].length; i++) {
          searchQueue.push(graph.adjList[person][i]);
        }
        // Marks person as searched
        searched.push(person);
      }
    }
  }
  return false;
}

module.exports = search;
