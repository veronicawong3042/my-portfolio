import React from 'react'

function ContactModal({onClose}) {
  return (
    <div>
        <button onClick={onClose}>x</button>
        <h1>Contact Modal</h1>
        <p>Content</p>
    </div>
  )
}

export default ContactModal