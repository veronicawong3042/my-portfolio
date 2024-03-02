import { useState, useEffect } from 'react';
import Loading from './Loading'

import { IoClose } from "react-icons/io5"

function ContactModal({onClose}) {
  return (
    <div>
        <button onClick={onClose}><IoClose /></button>
        <h1>Contact Modal</h1>
        <p>Content</p>
    </div>
  )
}

export default ContactModal