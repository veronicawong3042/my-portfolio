import React from 'react'

function AboutModal({onClose}) {
  return (
    <div>
        <button onClick={onClose}>x</button>
        <h1>About Modal</h1>
        <p>Content</p>
    </div>
  )
}

export default AboutModal