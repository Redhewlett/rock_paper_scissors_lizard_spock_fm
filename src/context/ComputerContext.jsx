import React, { useContext, useState } from 'react'

export const ComputerChoice = React.createContext()

export function ComputerChoiceProvider({ children }) {
  //   const [computerChoiceIndex, setComputerChoiceIndex] = useState(Math.floor(Math.random() * 6))
  const state = useState(Math.floor(Math.random() * 6))

  return <ComputerChoice.Provider value={state}>{children}</ComputerChoice.Provider>
}

export function useComputerChoice() {
  return useContext(ComputerChoice)
}
