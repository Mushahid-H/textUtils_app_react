import React, { useState } from 'react'

const TextArea = ({ header }) => {
  const [text, setText] = useState('Enter text here')

  const handleUpCase = () => {
    const newText = text.toUpperCase()
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
    </div>
  )
}

export default TextArea
