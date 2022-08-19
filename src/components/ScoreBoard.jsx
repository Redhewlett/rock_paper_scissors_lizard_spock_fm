import React from 'react'
import useGamePlay from '../contexts/GamePlayContext'

export default function ScoreBoard() {
  const { score } = useGamePlay()
  return (
    <section className='header uppercase text-white '>
      <h1 className='text-3xl w-5'>rock paper scissors lizard spock</h1>
      <div className='bg-white flex flex-col justify-center rounded items-center px-8 py-2'>
        <p className='text-blue-800 text-lg'>score</p>
        <p className='text-slate-700 text-6xl font-bold'>{score}</p>
      </div>
    </section>
  )
}
