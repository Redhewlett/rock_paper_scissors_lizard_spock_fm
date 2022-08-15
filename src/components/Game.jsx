import React, { useState, useContext } from 'react'
import { optionsArray } from '../assets/options'
import Option from './Option'
import Pentagon from './Pentagon'
import Round from './Round'
import useGamePlay from '../contexts/GamePlayContext'

export default function Game() {
  const { isPlaying, computerHand, playerHand } = useGamePlay()
  return (
    <>
      {isPlaying ? (
        <section className='game'>
          <Round />
        </section>
      ) : (
        <section className='options'>
          <Pentagon />
          <div>
            {optionsArray.map((option, index) => (
              <Option key={index} id={option.name} border={option.borderColor} shadow={option.shadowColor}>
                <img src={option.img} alt={option.name} />
              </Option>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
