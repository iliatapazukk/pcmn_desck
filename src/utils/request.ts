import Url from 'url'
import getUrlWithParamsConfig from './getUrlWithParamsConfig'

async function req(endpoint: string, query: object) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query))
  const resJson = await fetch(uri).then((res) => res.json())
  console.log('!!! query:', query)
  console.log('!!! uri:', uri)
  return resJson
}

export default req
