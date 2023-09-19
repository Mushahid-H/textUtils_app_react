import React, { useState } from 'react'
import TextSummary from './TextSummary'
import Preview from './Preview'
const TextArea = ({ header }) => {
  const [text, setText] = useState('Enter text here')

  const handleUpCase = () => {
    const newText = text.toUpperCase()
    setText(newText)
  }
  const handleLowCase = () => {
    const newText = text.toLowerCase()
    setText(newText)
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  return (
    <div>
      <h1 className='my-3'>{header}</h1>
      <div className='mb-3'>
        <textarea
          className='form-control'
          rows='8'
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpCase}>
        Convert to Uppercase
      </button>
      <button className='btn btn-primary mx-3' onClick={handleLowCase}>
        Convert to Lowerase
      </button>

      <TextSummary
        noOfwords={text.trim().split(' ').length}
        noOfcharacters={text.length}
      />
      <Preview text={text} />
    </div>
  )
}

export default TextArea
