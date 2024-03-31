import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    const handleLightBlueToggle = () => {
        setTheme(theme === 'dark-blue' || theme === 'light-blue' || theme === 'green' ? 'light-blue' : 'light-blue')
    };

    const handleDarkBlueToggle = () => {
        setTheme(theme === 'dark-blue' || theme === 'light-blue' || theme === 'green' ? 'dark-blue' : 'dark-blue')
    };

    const handleGreenToggle = () => {
        setTheme(theme === 'dark-blue' || theme === 'light-blue' || theme === 'green' ? 'green' : 'green')
    };
    
    return (
        <div className="theme-dots">
            <svg className="dark-blue-dot" onClick={handleDarkBlueToggle} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998"/>
            </svg>
            <svg className="light-blue-dot" onClick={handleLightBlueToggle} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998"/>
            </svg>
            <svg className="green-dot" onClick={handleGreenToggle} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998"/>
            </svg>
        </div>
    )
}

export default ThemeToggle;
