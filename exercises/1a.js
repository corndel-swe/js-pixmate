/**
 * Adds together all the even numbers smaller than or equal to n
 *
 * @example
 * // returns 20 (= 2 + 4 + 6 + 8)
 * addEven(8)
 *
 * @param {number} n - The upper limit
 * @returns {number} The sum of the even numbers smaller than or equal to n
 */
export function addEven(n) {
  let sum = 0
  let i = 2

  while (i <= n) {
    sum += i
    i += 2
  }

  return sum
}
