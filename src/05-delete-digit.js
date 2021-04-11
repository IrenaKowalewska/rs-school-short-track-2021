/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const arrOfNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    const copyArr = arr.slice();
    copyArr.splice(i, 1);
    arrOfNumbers.push(copyArr.join(''));
  }
  return Math.max(...arrOfNumbers);
}
module.exports = deleteDigit;
