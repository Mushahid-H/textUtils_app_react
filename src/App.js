import React from 'react'
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'

const App = () => {
  return (
    <div>
      <Navbar title='TextUtils' />
      <div className='container'>
        <TextArea header='Enter text to analyze' />
      </div>
    </div>
  )
}

export default App
