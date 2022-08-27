import ScoreBoard from './components/ScoreBoard'
import Game from './components/Game'

function App() {
  return (
    <div className='h-full flex flex-col justify-between lg:justify-start items-center lg:gap-24 py-8 px-1 lg:p-10'>
      <ScoreBoard />
      <Game />
    </div>
  )
}

export default App
