import React from 'react'

export const Button = ({ text, value ,set }) => {
  return (
    <>
        <button
            onClick={() => set(value + 1)}
            type="button" 
            className="btn btn-primary" 
        >
            {text}
        </button>
    </>
  )
}
