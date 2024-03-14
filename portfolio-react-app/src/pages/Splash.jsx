import React from 'react';
import mySpriteImage from '../images/my-sprite.png';

const SplashPage = ({ onStart }) => {
    return (
        <div className="splash-page">
            <img src={mySpriteImage} alt="me" />
            <h1>hi! i'm veronica</h1>
            <p>click start to enter my desktop</p>
            <button onClick={onStart}>start</button>
        </div>
    );
}

export default SplashPage;
