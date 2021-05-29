import Url from 'url'
import getUrlWithParamsConfig from './getUrlWithParamsConfig'

async function req<T>(endpoint: string, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query))
  const resJson = await fetch(uri).then((res) => res.json())
  return resJson
}

export default req
