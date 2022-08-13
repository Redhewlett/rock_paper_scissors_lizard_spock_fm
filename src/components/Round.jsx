import React, { useState, useContext, useEffect } from 'react'
import Option from './Option'
import { optionsArray } from '../assets/options'
import { GameState } from '../context/GameContext'

export default function Round() {
  const [isPlaying, setIsPlaying] = useContext(GameState)

  //play again
  function playAgain() {
    setIsPlaying(false)
  }

  return (
    <>
      {/* <div className='picked'>
        <p>you picked</p>
        <Option
          selected={true}
          id={optionsArray[playerIndex].name}
          border={optionsArray[playerIndex].borderColor}
          shadow={optionsArray[playerIndex].shadowColor}
        >
          <img src={optionsArray[playerIndex].img} alt={optionsArray[playerIndex].name} />
        </Option>
      </div> */}
      <div className='announce'>
        <p>you lose</p>
        <button onClick={playAgain}>play again</button>
      </div>
      {/* <div className='picked'>
        <p>the house picked</p>
        <Option
          selected={true}
          id={optionsArray[computerIndex].name}
          border={optionsArray[computerIndex].borderColor}
          shadow={optionsArray[computerIndex].shadowColor}
        >
          <img src={optionsArray[computerIndex].img} alt={optionsArray[computerIndex].name} />
        </Option>
      </div> */}
    </>
  )
}
