import { hashCode } from '@/index'

describe('hash code smoke tests', () => {
  test('can hash', () => {
    const hash1 = hashCode('some text')
    const hash2 = hashCode('some text 2')

    expect(hash1).not.toBeFalsy()
    expect(hash1).not.toEqual(hash2)
  })
})
