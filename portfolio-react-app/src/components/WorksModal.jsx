import { useState, useEffect } from 'react';
import Loading from './Loading'

import { IoClose } from "react-icons/io5"

function WorksModal({onClose}) {
  return (
    <div>
        <button onClick={onClose}><IoClose /></button>
        <h1>Works Modal</h1>
        <p>Content</p>
    </div>
  )
}

export default WorksModal