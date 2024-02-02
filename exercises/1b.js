/**
 * Adds together all the numbers in the array
 *
 * @example
 * // returns 11
 * sumArray([1, 3, 7])
 *
 * @param {number[]} arr - An array of numbers
 * @returns {number} The sum of the array
 */
export function sumArray(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum
}
