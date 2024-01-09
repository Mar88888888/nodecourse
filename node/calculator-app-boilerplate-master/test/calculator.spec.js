const assert = require('chai').assert;
const calculator = require('../calculator/index');

describe('Calculator testing', function () {
  describe('Functionality testing', function () {
    describe('Addition functionality testing', function () {
      it('Add two positive numbers, returning positive sum', function () {
        const result = calculator('A', { lhs: 2, rhs: 4 });
        assert.equal(result, 6);
      });

      it('Add two negative numbers, returning negative sum', function () {
        const result = calculator('A', { lhs: -2, rhs: -4 });
        assert.equal(result, -6);
      });

      it('Add two numbers, with either of them negative, producing subtracted output', function () {
        const result = calculator('A', { lhs: -2, rhs: 4 });
        assert.equal(result, 2);
      });

      it('Add zeros, produces zero', function () {
        const result = calculator('A', { lhs: 0, rhs: 0 });
        assert.equal(result, 0);
      });
    });

    describe('Subtraction functionality testing', function () {
      it('Subtract two positive numbers, returning positive subtraction', function () {
        const result = calculator('S', { lhs: 4, rhs: 3 });
        assert.equal(result, 1);
      });

      it('Subtract two negative numbers, returning negative subtraction', function () {
        const result = calculator('S', { lhs: -2, rhs: -4 });
        assert.equal(result, 2);
      });

      it('Subtract two numbers, with either of them negative, producing sum output', function () {
        const result = calculator('S', { lhs: -2, rhs: 4 });
        assert.equal(result, -6);
      });

      it('Subtract zeros, produces zero', function () {
        const result = calculator('S', { lhs: 0, rhs: 0 });
        assert.equal(result, 0);
      });
    });

    describe('Multiplication functionality testing', function () {
      it('Multiply two positive numbers, returning positive multiplication', function () {
        const result = calculator('M', { lhs: 3, rhs: 4 });
        assert.equal(result, 12);
      });

      it('Multiply two negative numbers, returning positive multiplication', function () {
        const result = calculator('M', { lhs: -2, rhs: -3 });
        assert.equal(result, 6);
      });

      it('Multiply two numbers, with either of them negative, producing negative multiplication output', function () {
        const result = calculator('M', { lhs: -2, rhs: 4 });
        assert.equal(result, -8);
      });

      it('Multiply zeros, produces zero', function () {
        const result = calculator('M', { lhs: 0, rhs: 5 });
        assert.equal(result, 0);
      });
    });

    describe('Division functionality testing', function () {
      it('Divide two positive numbers, returning positive division', function () {
        const result = calculator('D', { lhs: 6, rhs: 3 });
        assert.equal(result, 2);
      });

      it('Divide two negative numbers, returning positive division', function () {
        const result = calculator('D', { lhs: -8, rhs: -2 });
        assert.equal(result, 4);
      });

      it('Divide two numbers, with either of them negative, producing negative division output', function () {
        const result = calculator('D', { lhs: -10, rhs: 2 });
        assert.equal(result, -5);
      });

      it('Should not divide by 0, producing "Can not divide by zero" message', function () {
        const result = calculator('D', { lhs: 5, rhs: 0 });
        assert.equal(result, 'Can not divide by zero');
      });
    });

    describe('Unknown operation testing', function () {
      it('Should not calculate if unknown operation is passed, producing "Unknown operation" message', function () {
        const result = calculator('X', { lhs: 2, rhs: 3 }); // 'X' is an unknown operation
        assert.equal(result, 'Unknown operation');
      });
    });
  });
});
