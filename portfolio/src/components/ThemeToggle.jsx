
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    const handleDarkModeToggle = () => {
        setTheme(theme === 'light-blue' ? 'dark-blue' : 'light-blue'); 
    };
    
    console.log(theme)

    return (
        <div>
            <svg className="dark-mode-dot" onClick={handleDarkModeToggle} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998"/>
            </svg>
        </div>
    )
}

export default ThemeToggle;
