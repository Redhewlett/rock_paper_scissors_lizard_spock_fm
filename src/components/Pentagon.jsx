import React, { useContext } from 'react'
import Penta from '../assets/images/bg-pentagon.svg'
import { GameState } from '../context/GameContext'

export default function Pentagon() {
  const [isPlaying] = useContext(GameState)
  return (
    <>
      {isPlaying ? (
        ''
      ) : (
        <div className='pentagon-box'>
          <img className='pentagon' src={Penta} alt='pentagon shape' />
        </div>
      )}
    </>
  )
}
