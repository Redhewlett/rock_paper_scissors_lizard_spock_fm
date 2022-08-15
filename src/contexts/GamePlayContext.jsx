import { createContext, useContext, useReducer } from 'react'
import gamePlayReducer, { initialState } from './gamePlayReducer'

const GamePlayContext = createContext(initialState)

export const GamePlayProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gamePlayReducer, initialState)

  function toggleIsPlaying() {
    dispatch({
      type: 'TOGGLE_PLAYING'
    })
  }

  function setScore(score) {
    dispatch({
      type: 'SET_SCORE',
      payload: score
    })
  }

  function setPlayerHand(hand) {
    dispatch({
      type: 'SET_PLAYER_HAND',
      payload: hand
    })
  }

  function setComputerHand() {
    dispatch({
      type: 'SET_COMPUTER_HAND'
    })
  }

  const value = {
    score: state.score,
    playerHand: state.playerHand,
    computerHand: state.computerHand,
    isPlaying: state.isPlaying,
    toggleIsPlaying,
    setScore,
    setPlayerHand,
    setComputerHand
  }

  return <GamePlayContext.Provider value={value}>{children}</GamePlayContext.Provider>
}

const useGamePlay = () => {
  const context = useContext(GamePlayContext)
  return context
}
export default useGamePlay
