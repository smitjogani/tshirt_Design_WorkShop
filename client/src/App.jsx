import React from 'react'
import Canvas from "./canvas/index.jsx"
import Home from "./Pages/Home.jsx"
import Customizer from "./Pages/Customizer.jsx"

const App = () => {
  return (
    <>
      <main className='app transition-all ease-in'>
        <Home/>
        <Customizer/>
        <Canvas/>
      </main>
    </>
  )
}

export default App