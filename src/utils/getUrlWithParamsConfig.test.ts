import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', ()=>{
  test('Must receive two arguments "getPokemons" and empty Object, on the exit Obj with keys pathname, protocol, host, query ',
    ()=>{
      const url = getUrlWithParamsConfig('getPokemons', {})

      expect(url).toEqual({
        method: 'GET',
        uri: {
          protocol: 'http',
          host: 'zar.hosthot.ru',
          pathname: '/api/v1/pokemons',
          query: {}
        },
        body: {}
      }, )
    });
  test('Must receive two arguments "getPokemon" and empty Object, on the exit {id: 24} with keys pathname, protocol, host, empty query',
    ()=>{
      const url = getUrlWithParamsConfig('getPokemon', {id: 24})

      expect(url).toEqual({
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {id: 24}
      })
    });

})