'use strict';

/*
    This function takes in an array. Using a higher-order Array function,
    add a string of "foo" on to the end of every string in the array.

    Return the array.

    Example input: [ 'car', 'truck', 'wallet', 'giraffe', 'reqeust' ]
    Example output: [ 'carfoo', 'truckfoo', 'walletfoo', 'giraffefoo', 'requestfoo' ]
*/

function assignmentOne(myArray) {

    return null;
}

/*
    This function takes in an array. Using a higher-order Array function,
    depending on the contents of the current string in the array:
        - add on "foo" to the beginning of the string if it contains substring "bar"
        - prepend "{index}-" to the string

    Return the array.

    Example input: [ 'mocha', 'bar of soap', 'phone', 'barr', 'giraffe' ]
    Example output: [ '0-mocha', '1-foobar of soap', '2-phone', '3-foobarr', '4-giraffe' ]
*/

function assignmentTwo(myArray) {

    return null;
}

/*
    This function takes in an array. Using a higher order Array function,
    reduce this array down to only elements that are of type string.

    Return the array.

    Example input: [ 5, 'foo', null, undefined, [ 'nerf', 'dart' ], { a: 4 }, 'bar' ]
    Example output: [ 'foo', 'bar' ]
*/

function assignmentThree(myArray) {
    
    return null;
}

/*
    This function takes in an array of chars. Using a higher order Array function,
    turn this array into a string that consists of each element of the array, in order.

    Example input: [ 'G', 'i', 'r', 'a', 'f', 'f', 'e' ]
    Example output: "Giraffe"
*/

function assignmentFour(myArray) {

    return null;
}

/*
    This function takes in an array of numbers. Using a higher order Array function,
    add up each number in the array that happnens to be even AND is lower than 100.

    Return the new total.

    Example input: [ 5004, 82, 241, 6, 32, 71, 5, 94 ]
    Example output: 214
*/

function assignmentFive(myArray) {

    return null;
}

/////////

    // More entry level assignments here, focusing on Object {} manipulation.

/////////

module.exports = {
    assignmentOne,
    assignmentTwo,
    assignmentThree,
    assignmentFour,
    assignmentFive
}