import assert from 'assert'
import { addEven } from '../exercises/1a.js'

describe('addEven', () => {
  it('should return 20 for n=8', () => {
    assert.strictEqual(addEven(8), 20)
  })

  it('should return 0 for n=1', () => {
    assert.strictEqual(addEven(1), 0)
  })

  it('should handle a large number', () => {
    assert.strictEqual(addEven(100), 2550)
  })

  it('should return 2 for n=2', () => {
    assert.strictEqual(addEven(2), 2)
  })

  it('should handle odd numbers', () => {
    assert.strictEqual(addEven(7), 12) // 2 + 4 + 6 = 12
  })

  it('should handle even numbers', () => {
    assert.strictEqual(addEven(10), 30) // 2 + 4 + 6 + 8 + 10 = 30
  })
})
