/**
 * Finds the index of the first element in an array that is smaller than the element before it.
 *
 * @example
 * // returns 3
 * stepDown([10, 12, 15, 14, 16, 20])
 *
 * @example
 * // returns -1 (no element is smaller than its predecessor)
 * stepDown([5, 10, 15, 20])
 *
 * @param {number[]} numbers - An array of numbers to be examined.
 * @returns {number} The index of the first element that is smaller than its predecessor.
 *                   Returns -1 if no such element is found or if the array is empty.
 */
export function stepDown(numbers) {
  let answer = -1

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i - 1]) {
      answer = i
      break
    }
  }

  return answer
}
