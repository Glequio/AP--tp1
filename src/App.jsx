import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Voto from './component/Voto/Voto'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p className='titulo'>Boca de urnas</p>
      <div>
        <Voto name="candidato 1"cont="3"></Voto>
        <Voto name="candidato 2"cont="2"></Voto>
      </div>

    </>
  )
}

export default App
