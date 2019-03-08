function isUnique(str) {

    let hash = {};

    for(let i=0; i < str.length; i++) {
        if(str[i] in hash) return false;
        hash[str[i]] = i;
    }

    return true;

}

module.exports = isUnique;