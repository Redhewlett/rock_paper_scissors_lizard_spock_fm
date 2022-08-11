import ScoreBoard from './components/ScoreBoard'
import Options from './components/Options'

function App() {
  return (
    <div className='h-full flex flex-col  justify-around items-center p-10'>
      <ScoreBoard />
      <Options />
    </div>
  )
}

export default App
