import React, { useState } from 'react'
import TextSummary from './TextSummary'
import Preview from './Preview'

const TextArea = ({ header, mode }) => {
  const [text, setText] = useState('Enter text here')

  const handleUpCase = () => {
    const newText = text.toUpperCase()
    setText(newText)
  }
  const handleLowCase = () => {
    const newText = text.toLowerCase()
    setText(newText)
  }
  const handleClear = () => {
    setText('')
  }
  const handleCopy = () => {
    const newText = document.getElementById('textArea')
    newText.select()
    navigator.clipboard.writeText(newText.value)
  }
  const handleRemove = () => {
    const newText = text.split(/[ ]+/)
    setText(newText.join(' '))
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  return (
    <div style={{ color: mode === 'dark' ? 'white' : 'black' }}>
      <h1 className='my-3'>{header}</h1>
      <div className='mb-3'>
        <textarea
          className='form-control'
          rows='8'
          id='textArea'
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: mode === 'dark' ? 'grey' : 'white',
            color: mode === 'dark' ? 'white' : 'black',
          }}
        ></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpCase}>
        Convert to Uppercase
      </button>
      <button className='btn btn-primary mx-3' onClick={handleLowCase}>
        Convert to Lowerase
      </button>
      <button className='btn btn-primary ' onClick={handleClear}>
        Clear Text
      </button>
      <button className='btn btn-primary mx-3' onClick={handleCopy}>
        Copy Text
      </button>
      <button className='btn btn-primary ' onClick={handleRemove}>
        Remove Extra Spaces
      </button>
      <TextSummary
        noOfwords={text.trim().split(' ').length}
        noOfcharacters={text.length}
      />
      <Preview
        text={text.length > 0 ? text : 'Write something to preview'}
      ></Preview>
    </div>
  )
}

export default TextArea
