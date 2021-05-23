export const config = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathName: '/api/v1/pokemons',
        },
      },
    },
  },
}

export default config
