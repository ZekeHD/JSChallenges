'use strict';

const chai = require('chai');
const expect = chai.expect;

const firstLevelAssignments = require('./index.js');
const solutions = require('./solutions.js');

describe('the Level One Challenges', () => {

    describe('the first assignment', () => {
        it('should return the correct answer', () => {
            let { input, answer } = solutions.assignmentOne;
            expect(firstLevelAssignments.assignmentOne(input)).to.deep.equal(answer);
        });
    });
    
    describe('the second assignment', () => {
        it('should return the correct answer', () => {
            let { input, answer } = solutions.assignmentTwo;
            expect(firstLevelAssignments.assignmentTwo(input)).to.deep.equal(answer);
        });
    });
    
    describe('the third assignment', () => {
        it('should return the correct answer', () => {
            let { input, answer } = solutions.assignmentThree;
            expect(firstLevelAssignments.assignmentThree([ 'giraffe', 'foo' ])).to.deep.equal(['giraffefoo', 'foofoo']);
        });
    });
    
    describe('the fourth assignment', () => {
        it('should return the correct answer', () => {
            let { input, answer } = solutions.assignmentFour;
            expect(firstLevelAssignments.assignmentFour([ 'giraffe', 'foo' ])).to.deep.equal(['giraffefoo', 'foofoo']);
        });
    });
    
    describe('the fifth assignment', () => {
        it('should return the correct answer', () => {
            let { input, answer } = solutions.assignmentFive;
            expect(firstLevelAssignments.assignmentFive([ 'giraffe', 'foo' ])).to.deep.equal(['giraffefoo', 'foofoo']);
        });
    });
});