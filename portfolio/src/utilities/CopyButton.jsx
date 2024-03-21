import React, { useState } from 'react';
import { FaRegCopy, FaCopy } from "react-icons/fa6";

const CopyButton = ({ email }) => {
    const [isCopied, setIsCopied] = useState(false);

    const CopyButton = () => {
        navigator.clipboard.writeText(email);
        setIsCopied(true);
    };

    return (
        <div className="copy-button">
            <a className='email' href={`mailto:${email}`}>veronicawong3042@gmail.com</a>
            <button onClick={CopyButton}>{isCopied ? <FaCopy /> : <FaRegCopy />}</button>
        </div>
    );
};

export default CopyButton;
