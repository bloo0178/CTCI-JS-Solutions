function intersection(setA, setB) {
  let _intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function difference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

const setCovering = () => {
  let states_needed = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

  let stations = {};
  stations["kone"] = new Set(["id", "nv", "ut"]);
  stations["ktwo"] = new Set(["wa", "id", "mt"]);
  stations["kthree"] = new Set(["or", "nv", "ca"]);
  stations["kfour"] = new Set(["nv", "ut"]);
  stations["kfive"] = new Set(["ca", "az"]);

  let final_stations = new Set();

  while (states_needed.size !== 0) {
    let best_station = null;
    let states_covered = new Set();
    for(let station in stations) {
        let covered = intersection(states_needed, stations[station]);
        if (covered.size > states_covered.size) {
            best_station = station;
            states_covered = covered;
        }
    }
    states_needed = difference(states_needed, states_covered);
    final_stations.add(best_station);
  }

  console.log(final_stations);
  return final_stations;
};

module.exports = setCovering; 
