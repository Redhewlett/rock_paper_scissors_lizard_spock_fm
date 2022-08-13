import ScoreBoard from './components/ScoreBoard'
import Game from './components/Game'

function App() {
  return (
    <div className='h-full flex flex-col justify-start items-center gap-24 p-10'>
      <ScoreBoard />
      <Game />
    </div>
  )
}

export default App
