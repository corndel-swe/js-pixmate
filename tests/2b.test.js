import assert from 'assert'
import { stepDown } from '../exercises/2b.js'

describe('stepDown', () => {
  it('should return the index of the first element that is smaller than its predecessor', () => {
    assert.strictEqual(stepDown([10, 12, 15, 14, 16, 20]), 3)
    assert.strictEqual(stepDown([3, 4, 2, 5, 6]), 2)
  })

  it('should handle arrays where the first two elements satisfy the condition', () => {
    assert.strictEqual(stepDown([3, 2, 4, 5, 6]), 1)
  })
})
