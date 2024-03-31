import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    const handleLightBlueToggle = () => {
        setTheme(
            theme === 'dark-blue' || 
            theme === 'light-blue' || 
            theme === 'green' || 
            theme === 'yellow' ||
            theme === 'pink' ||
            theme === 'blue'
            ? 'light-blue' : 'light-blue'
            )
    };

    const handleDarkBlueToggle = () => {
        setTheme(
            theme === 'dark-blue' || 
            theme === 'light-blue' || 
            theme === 'green' || 
            theme === 'yellow' ||
            theme === 'pink' ||
            theme === 'blue'
            ? 'dark-blue' : 'dark-blue'
        )
    };

    const handleGreenToggle = () => {
        setTheme(
            theme === 'dark-blue' || 
            theme === 'light-blue' || 
            theme === 'green' || 
            theme === 'yellow' ||
            theme === 'pink' ||
            theme === 'blue'
            ? 'green' : 'green'
        )
    };

    const handleYellowToggle = () => {
        setTheme(
            theme === 'dark-blue' || 
            theme === 'light-blue' || 
            theme === 'green' || 
            theme === 'yellow' ||
            theme === 'pink' ||
            theme === 'blue'
            ? 'yellow' : 'yellow'
        )
    };

    const handlePinkToggle = () => {
        setTheme(
            theme === 'dark-blue' || 
            theme === 'light-blue' || 
            theme === 'green' || 
            theme === 'yellow' ||
            theme === 'pink' ||
            theme === 'blue'
            ? 'pink' : 'pink'
        )
    };

    const handleBlueToggle = () => {
        setTheme(
            theme === 'dark-blue' || 
            theme === 'light-blue' || 
            theme === 'green' || 
            theme === 'yellow' ||
            theme === 'pink' ||
            theme === 'blue'
            ? 'blue' : 'blue'
        )
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
            <svg className="yellow-dot" onClick={handleYellowToggle} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998"/>
            </svg>
            <svg className="pink-dot" onClick={handlePinkToggle} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998"/>
            </svg>
            <svg className="blue-dot" onClick={handleBlueToggle} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998"/>
            </svg>
        </div>
    )
}

export default ThemeToggle;
