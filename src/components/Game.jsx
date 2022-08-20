import React, { useState } from 'react'
import { optionsArray } from '../assets/options'
import Option from './Option'
import Pentagon from './Pentagon'
import Round from './Round'
import useGamePlay from '../contexts/GamePlayContext'
import rules from '../assets/images/image-rules-bonus.svg'

export default function Game() {
  const { isPlaying } = useGamePlay()

  const [modalOpen, setModalOpen] = useState(false)

  function displayRules() {
    setModalOpen(!modalOpen)
  }

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
      <div className='w-full flex justify-end'>
        <button className='rules uppercase text-white text-lg border-2 rounded-lg py-1 px-8' onClick={displayRules}>
          rules
        </button>
        {modalOpen ? <img src={rules} alt='game rules' /> : ''}
      </div>
    </>
  )
}
