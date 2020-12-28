import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))

    setState(() => {
      const storageValue = localStorage.getItem(key)

      if (storageValue) return JSON.parse(storageValue)
      else return initialState
    })
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
