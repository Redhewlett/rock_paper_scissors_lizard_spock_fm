import React, { useState, useContext, useEffect } from 'react'
import Option from './Option'
import { optionsArray } from '../assets/options'
import useGamePlay from '../contexts/GamePlayContext'

export default function Round() {
  const { toggleIsPlaying, playerHand, computerHand } = useGamePlay()
  //play again
  function playAgain() {
    toggleIsPlaying()
  }

  return (
    <>
      <p>you chose:{playerHand}</p>
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
      <div className='picked'>
        <p>the house picked</p>
        <Option
          selected={true}
          id={optionsArray[computerHand].name}
          border={optionsArray[computerHand].borderColor}
          shadow={optionsArray[computerHand].shadowColor}
        >
          <img src={optionsArray[computerHand].img} alt={optionsArray[computerHand].name} />
        </Option>
      </div>
    </>
  )
}
