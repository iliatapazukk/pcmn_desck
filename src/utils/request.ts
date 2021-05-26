import Url from 'url'
import getUrlWithParamsConfig from './getUrlWithParamsConfig'

async function req(endpoint: string) {
  const uri = Url.format(getUrlWithParamsConfig('getPokemons'))
  const resJson = await fetch(uri).then((res) => res.json())
  return resJson
}

export default req
