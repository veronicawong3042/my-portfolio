import mySpriteImage from '../images/my-sprite.png';
import { BsArrowRightCircleFill } from "react-icons/bs";

const SplashPage = ({ onStart }) => {

    return (
        <div className="splash-page">
            <img src={mySpriteImage} alt="me" />
            <div className='splash-content'>
                <h1>Portfolio</h1>
                <p className='username'>veronicawong</p>  
                <div className="password">
                    <div className='dots'>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <BsArrowRightCircleFill className='arrow-button' onClick={onStart} />
                </div>
            </div>
        </div>
    )
        }

export default SplashPage;
