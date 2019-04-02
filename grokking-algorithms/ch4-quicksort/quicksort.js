function quicksort(arr) {

    // base case
    if (arr.length < 2) return arr;
    // recursive case
    else {
        let pivot = arr[0];
        let less = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= pivot) less.push(arr[i]);
        }
        let greater = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > pivot) greater.push(arr[i]);
        }
        return quicksort(less).concat([pivot].concat(quicksort(greater)));
    }
}

module.exports = quicksort; 

