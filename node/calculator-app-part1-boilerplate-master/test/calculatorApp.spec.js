const chai = require('chai');
const expect = chai.expect;
const calculator = require('../src/calculatorApp.js');

describe('Addition Functionality', () => {
  
  it('Check for addition of two positive numbers and return the sum as a positive number', () => {
    expect(calculator.addition(2, 4)).to.equal(6);
  });

  it('Check for addition of two negative numbers and return the sum as a negative number.', () => {
    expect(calculator.addition(-2, -4)).to.equal(-6);
  });
  
  it('Check if either of the numbers is negative produce subtracted output.', () => {
    expect(calculator.addition(-2, 4)).to.equal(2);
  });
});

describe('Subtraction Functionality', () => {
  it('Check for subtracting two positive numbers and return positive subtraction', () => {
    expect(calculator.subtraction(4, 3)).to.equal(1);
  });

  it('Check if either of the numbers is negative produce sum as output', () => {
    expect(calculator.subtraction(-2, -4)).to.equal(2);
  });

  it('Subtracting zero will produce zero as subtraction.', () => {
    expect(calculator.subtraction(0, 0)).to.equal(0);
  });
});
