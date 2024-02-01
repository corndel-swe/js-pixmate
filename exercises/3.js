/**
 * Given a grid of numbers (an array of arrays),
 * count how many are larger than 10.
 *
 * @example
 * // returns 4
 * gridLimit([
 *  [3, 12, 1],
 *  [19, 10, 11],
 *  [9, 5, 105]
 * ])
 *
 * @param {number[][]} grid - an array of arrays of numbers
 * @returns {number} The count of numbers larger than 10
 */
export function gridLimit(grid) {
  let count = 0

  for (const row of grid) {
    for (const num of row) {
      if (num > 10) {
        count++
      }
    }
  }

  return count
}
