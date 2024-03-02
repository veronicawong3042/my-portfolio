import React from 'react'

function WorksModal({onClose}) {
  return (
    <div>
        <button onClick={onClose}>x</button>
        <h1>Works Modal</h1>
        <p>Content</p>
    </div>
  )
}

export default WorksModal