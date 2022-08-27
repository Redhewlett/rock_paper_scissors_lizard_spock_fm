import React from 'react'
import logo from '../assets/images/logo-bonus.svg'
import useGamePlay from '../contexts/GamePlayContext'

export default function ScoreBoard() {
  const { score } = useGamePlay()
  return (
    <section className='header uppercase text-white '>
      <img src={logo} alt='rock_paper_scissors_lizzard_spock_logo' />
      <div className='bg-white flex flex-col justify-center rounded items-center px-6 py-3 lg:px-8 lg:py-2'>
        <p className='text-blue-800 text-xs lg:text-lg'>score</p>
        <p className='text-slate-700 text-3xl lg:text-6xl font-bold'>{score}</p>
      </div>
    </section>
  )
}
