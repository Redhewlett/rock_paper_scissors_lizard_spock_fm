import React, { useState, useContext } from 'react'
import { optionsArray } from '../assets/options'
import Option from './Option'
import Pentagon from './Pentagon'
import Round from './Round'
import { useGameState } from '../context/GameContext'

export default function Game() {
  const [{ isPlaying }] = useGameState()

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
