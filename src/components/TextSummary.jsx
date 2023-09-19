import React from 'react'

const TextSummary = ({ noOfwords, noOfcharacters }) => {
  return (
    <div className='py-3'>
      <h2>Text Summary</h2>
      <p className='fw-bold'>
        {noOfwords} Words and {noOfcharacters} characters
      </p>
      <p>{0.008 * noOfwords} minutes to read this text</p>
    </div>
  )
}

export default TextSummary
