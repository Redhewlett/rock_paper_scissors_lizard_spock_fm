export const initialState = {
  score: 0,
  playerHand: 'what?',
  computerHand: undefined,
  isPlaying: false,
  result: undefined
}

const gamePlayReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'TOGGLE_PLAYING':
      return {
        ...state,
        isPlaying: !state.isPlaying
      }
    case 'SET_SCORE':
      return {
        ...state,
        score: payload
      }
    case 'SET_PLAYER_HAND':
      return {
        ...state,
        playerHand: payload
      }
    case 'SET_COMPUTER_HAND':
      return {
        ...state,
        computerHand: Math.floor(Math.random() * 5)
      }
    case 'COMPARE_HANDS':
      return {
        ...state,
        result: payload
      }
    default:
      return state
  }
}
export default gamePlayReducer
