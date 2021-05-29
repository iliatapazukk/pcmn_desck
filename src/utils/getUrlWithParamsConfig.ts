import config from '../config'

function getUrlWithParamsConfig(endpointConfig: keyof typeof config.client.endpoint, query: object) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
    query: {
      ...query,
    },
  }
  return url
}

export default getUrlWithParamsConfig
