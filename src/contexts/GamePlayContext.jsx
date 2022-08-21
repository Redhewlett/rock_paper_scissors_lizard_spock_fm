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
      payload: score + 1
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

  function compareHands(computer, player) {
    let result
    // scissors case
    if (computer === 'Scissors') {
      if (player === 'Paper') {
        result = 'you lose'
      } else if (player === 'Lizard') {
        result = 'you lose'
      } else if (computer === player) {
        result = `it's a tie`
      } else {
        result = 'you win'
        setScore(state.score)
      }
    }
    //paper case
    if (computer === 'Paper') {
      if (player === 'Rock') {
        result = 'you lose'
      } else if (player === 'Spock') {
        result = 'you lose'
      } else if (computer === player) {
        result = `it's a tie`
      } else {
        result = 'you win'
        setScore(state.score)
      }
    }
    //rock case
    if (computer === 'Rock') {
      if (player === 'Lizard') {
        result = 'you lose'
      } else if (player === 'Scissors') {
        result = 'you lose'
      } else if (computer === player) {
        result = `it's a tie`
      } else {
        result = 'you win'
        setScore(state.score)
      }
    }
    // lizzard case
    if (computer === 'Lizard') {
      if (player === 'Spock') {
        result = 'you lose'
      } else if (player === 'Paper') {
        result = 'you lose'
      } else if (computer === player) {
        result = `it's a tie`
      } else {
        result = 'you win'
        setScore(state.score)
      }
    }
    //spock case
    if (computer === 'Spock') {
      if (player === 'Scissors') {
        result = 'you lose'
      } else if (player === 'Rock') {
        result = 'you lose'
      } else if (computer === player) {
        result = `it's a tie`
      } else {
        result = 'you win'
        setScore(state.score)
      }
    }
    //================
    dispatch({
      type: 'COMPARE_HANDS',
      payload: result
    })
  }

  const value = {
    score: state.score,
    playerHand: state.playerHand,
    computerHand: state.computerHand,
    isPlaying: state.isPlaying,
    result: state.result,
    toggleIsPlaying,
    setScore,
    setPlayerHand,
    setComputerHand,
    compareHands
  }

  return <GamePlayContext.Provider value={value}>{children}</GamePlayContext.Provider>
}

const useGamePlay = () => {
  const context = useContext(GamePlayContext)
  return context
}
export default useGamePlay
