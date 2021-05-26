import { useEffect, useState } from 'react'
import req from '../utils/request'
import { PokemonCardI } from '../components/PokemonCard'

interface PokemonsDataI {
  count: number
  limit: number
  offset: number
  total: number
  pokemons: PokemonCardI[]
}

const useData = (endpoint: string, query: object) => {
  // @ts-ignore
  const [data, setData] = useState<PokemonsDataI>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const result = await req(endpoint, query)
        setData(result)
      } catch (e) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [query])
  return {
    data,
    isLoading,
    isError,
  }
}

export default useData
