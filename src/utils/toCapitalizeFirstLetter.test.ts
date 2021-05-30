import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe ('toCapitalizeFirstLetter', () => {
  test('Accepts text as input and capitalizes the first letter', () => {
    const capitalizeText = toCapitalizeFirstLetter('test' )
    expect (capitalizeText).toEqual('Test')
  })
})