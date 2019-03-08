function isUnique(str) {

    let hash = {};

    for(let i=0; i < str.length; i++) {
        if(str[i] in hash) return false;
        hash[str[i]] = i;
    }

    return true;

}

let test1 = "abcd";
let test2 = "abbd";

console.log(isUnique(test1));
console.log(isUnique(test2));