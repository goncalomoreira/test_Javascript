// function to verify all conditions
function checkAllConditions(arr) {
    return new Set(arr).size === arr.length;
}

// function to validate if the numberLocation is correct and if isnt correct return false
function to_validate(numberLocation) {
    if (numberLocation.length != 9) {
        return false;
    }
    for ( let num of numberLocation) {
        if ( typeof num != 'number' || num > 9 || num < 1 ) {
            return false;
        }
    }

    return checkAllConditions(numberLocation);
}