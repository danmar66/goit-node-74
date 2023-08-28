const greet = require('./greeting')

describe('greeting', () => {
  it('should return greetin', () => {
    const result = greet()
    expect(result).toMatchInlineSnapshot(`"Hello!!!!!!u"`)
  })
})
