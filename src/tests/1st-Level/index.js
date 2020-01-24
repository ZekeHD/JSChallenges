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
        - prepend "{index}-" of the current element to the element
        - add on "foo" to the beginning of the string if it contains substring "bar"

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
*/

function assignmentThree(myArray) {
    
    return null;
}

/*
    This function takes in an array of chars. Using a higher order Array function,
    turn this array into a string that consists of each element of the array, in order.

    Input: [ 'G', 'i', 'r', 'a', 'f', 'f', 'e' ] // Output: 'Giraffe'
*/

function assignmentFour(myArray) {

    return null;
}

/*
    This function takes in an array of numbers. Using a higher order Array function,
    add up each number in the array that happnens to be even AND is higher than 100.

    Return the new total.
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