/*

Uses a random pivot which results in best case runtime being the average case runtime. This quicksort takes O(n*log(n)) time to complete. 

*/

function quicksort(arr) {

    // base case
    if (arr.length < 2) return arr;
    // recursive case
    else {
        //let pivot = arr[0];
        let pivotIndex = getRandomVal(0, arr.length - 1);
        let pivot = arr[pivotIndex]
        let less = [];
        for (let i = 0; i < arr.length; i++) {
            if (i !== pivotIndex && arr[i] <= pivot) less.push(arr[i]);
        }
        let greater = [];
        for (let i = 0; i < arr.length; i++) {
            if (i !== pivotIndex && arr[i] > pivot) greater.push(arr[i]);
        }
        return quicksort(less).concat([pivot].concat(quicksort(greater)));
    }
}

// Gets a random val between min and max (inclusive of both)
function getRandomVal(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = quicksort; 

