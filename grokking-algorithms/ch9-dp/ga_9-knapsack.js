/*

guitar = $1500; 1lbs
stereo = $3000; 4lbs
laptop = $2000; 3lbs

*/

let prices = { guitar: 1500, stereo: 3000, laptop: 2000 };
let weights = { guitar: 1, stereo: 4, laptop: 3 };

console.log(weights)

const steal = (prices, weights) => {

    let res = []; 
    let minWeight = 1; // auto-calc this
    let maxWeight = 4; // auto-calc this
    let interval = 1;
    let weightMappings = {};

    for(let i = 0, cur = minWeight; i < (maxWeight-minWeight) / interval; i++) {
        weightMappings[i] = cur;
        cur += interval; 
    }

    // Rows = items
    for(let i = 0; i < Object.keys(prices).length; i++) {
        // Columns = weights
        let itemRow = [];
        for(let j = 0; j <= (maxWeight - minWeight) / interval; j++) {
            let previousMax;
            let curItem; 
            // Set value of previousMax
            if(! res[i-1][j]) {
                previousMax = 0;
            } else {
                previousMax = res[i-1][j];
            }
        }
        res.push(itemRow);

    }
}
