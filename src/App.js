import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'
import About from './components/About'
const App = () => {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <div>
      <Navbar title='TextUtils' toggleMode={toggleMode} mode={mode} />
      <div className='container'>
        <TextArea header='Enter text to analyze' mode={mode} />
        {/* <About /> */}
      </div>
    </div>
  )
}

export default App
