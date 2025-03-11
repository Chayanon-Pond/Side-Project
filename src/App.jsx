import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HerroSection from './Components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      <section>
        <h1>My First React App on Vite</h1>
      </section>
      <Navbar/>
  </div>
  )
}

export default App
