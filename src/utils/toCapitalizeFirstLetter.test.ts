import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe ('toCapitalizeFirstLetter', () => {
  test('Accepts text as input and capitalizes the first letter', () => {
    const word = 'test'
    expect(word).not.toBeNull()
    const capitalizeText = toCapitalizeFirstLetter(word)
    expect (capitalizeText).toEqual('Test')
  })
})