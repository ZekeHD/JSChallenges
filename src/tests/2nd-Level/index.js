'use strict';

/*
    This function is passed an array of arrays of varying depth. De-nest
    all of the nested arrays and return a single, 1d array
    with all of the values of each array, in order.

    Return the new array.

    Example input: [ 4, 16, 24, [ 1, 2 ], 6, [[ 4, 3 ]], [[[ 24, 9 ]]], [[[[[[[[ 4 ]]]]]]]] ]
    Example output: [ 4, 16, 24, 1, 2, 6, 4, 3, 24, 9, 4 ]
*/

function assignmentOne(myArray) {

    return null;
}

/*
    This function is passed an array of arrays of varying depth. De-nest
    ONLY up through the 2nd level. 3rd level arrays should not
    be de-nested.

    Example input:
        let arr = [
            1 <- depth 0 (because it's not nested in an array)
            [2, 3] <- depth 1 (because these are nested in 1 array)
            [4, [ 5 ]] <- the "5" is at depth 2 (because the "5" is nested in 2 array)
            [6, [[ 7 ]]] < - the "5" is at depth 3 (because the "5" is nested in 3 arrays)
        ];

    Example output: [ 1, 2, 3, 4, 5, 6, [ 7 ]]
*/

function assignmentTwo(myArray) {

    return null;
}