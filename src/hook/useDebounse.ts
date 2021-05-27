import {useEffect, useState} from 'react'

export const useDebounse = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() =>{

    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);

    return () => {
      clearInterval(handler)
    }

  }, [value])

  return debouncedValue;
}

export default useDebounse
