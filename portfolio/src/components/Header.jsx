import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { FaRegCircle } from "react-icons/fa";

function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(format(new Date(), 'hh:mm a'));
  const [paletteClicked, setPaletteClicked] = useState(false); 
  const [darkMode, setDarkMode] = useState(false); // State to track dark mode

  useEffect(() => {
    const dateInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    const timeInterval = setInterval(() => {
      setCurrentTime(format(new Date(), 'hh:mm a'));
    }, 5000);

    return () => {
      clearInterval(dateInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const handlePaletteClick = () => {
    setPaletteClicked(!paletteClicked);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode); 
  };

  return (
    <div className={`header-content ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="header-icons">
            <svg className='paint-palette' onClick={handlePaletteClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.58 0c-1.234 0-2.377.616-3.056 1.649-.897 1.37-.854 3.261-1.368 4.444-.741 1.708-3.873.343-5.532-.524-2.909 5.647-5.025 8.211-6.845 10.448 6.579 4.318 1.823 1.193 12.19 7.983 2.075-3.991 4.334-7.367 6.825-10.46-1.539-1.241-4.019-3.546-2.614-4.945 1-1 2.545-1.578 3.442-2.95 1.589-2.426-.174-5.645-3.042-5.645zm-5.348 21.138l-1.201-.763c0-.656.157-1.298.422-1.874-.609.202-1.074.482-1.618 1.043l-3.355-2.231c.531-.703.934-1.55.859-2.688-.482.824-1.521 1.621-2.331 1.745l-1.302-.815c1.136-1.467 2.241-3.086 3.257-4.728l8.299 5.462c-1.099 1.614-2.197 3.363-3.03 4.849zm6.724-16.584c-.457.7-2.445 1.894-3.184 2.632-.681.68-1.014 1.561-.961 2.548.071 1.354.852 2.781 2.218 4.085-.201.265-.408.543-.618.833l-8.428-5.548.504-.883c1.065.445 2.1.678 3.032.678 1.646 0 2.908-.733 3.464-2.012.459-1.058.751-3.448 1.206-4.145 1.206-1.833 3.964-.017 2.767 1.812zm-.644-.424c-.265.41-.813.523-1.22.257-.409-.267-.522-.814-.255-1.223.267-.409.813-.524 1.222-.257.408.266.521.817.253 1.223z"/></svg>
            <svg className='wifi-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.504 13.572l-1.505-1.489c2.201-2.805 5.413-4.583 9.001-4.583s6.8 1.779 9 4.583l-1.504 1.489c-1.835-2.338-4.512-3.822-7.496-3.822s-5.661 1.484-7.496 3.822zm7.496.678c1.791 0 3.397.891 4.498 2.293l1.502-1.488c-1.467-1.869-3.608-3.055-6-3.055s-4.533 1.186-6 3.055l1.502 1.488c1.101-1.402 2.707-2.293 4.498-2.293zm0 2.25c-1.196 0-2.258.602-2.99 1.536l2.99 2.964 2.99-2.963c-.732-.935-1.794-1.537-2.99-1.537zm0-11.25c4.179 0 7.927 2.078 10.495 5.351l1.505-1.491c-2.935-3.739-7.217-6.11-12-6.11s-9.065 2.371-12 6.11l1.505 1.491c2.568-3.273 6.316-5.351 10.495-5.351z"/></svg>
            <svg className='search-icon' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill-rule="nonzero"/></svg>
            <svg className='paint-palette-2' onClick={handlePaletteClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.58 0c-1.234 0-2.377.616-3.056 1.649-.897 1.37-.854 3.261-1.368 4.444-.741 1.708-3.873.343-5.532-.524-2.909 5.647-5.025 8.211-6.845 10.448 6.579 4.318 1.823 1.193 12.19 7.983 2.075-3.991 4.334-7.367 6.825-10.46-1.539-1.241-4.019-3.546-2.614-4.945 1-1 2.545-1.578 3.442-2.95 1.589-2.426-.174-5.645-3.042-5.645zm-5.348 21.138l-1.201-.763c0-.656.157-1.298.422-1.874-.609.202-1.074.482-1.618 1.043l-3.355-2.231c.531-.703.934-1.55.859-2.688-.482.824-1.521 1.621-2.331 1.745l-1.302-.815c1.136-1.467 2.241-3.086 3.257-4.728l8.299 5.462c-1.099 1.614-2.197 3.363-3.03 4.849zm6.724-16.584c-.457.7-2.445 1.894-3.184 2.632-.681.68-1.014 1.561-.961 2.548.071 1.354.852 2.781 2.218 4.085-.201.265-.408.543-.618.833l-8.428-5.548.504-.883c1.065.445 2.1.678 3.032.678 1.646 0 2.908-.733 3.464-2.012.459-1.058.751-3.448 1.206-4.145 1.206-1.833 3.964-.017 2.767 1.812zm-.644-.424c-.265.41-.813.523-1.22.257-.409-.267-.522-.814-.255-1.223.267-.409.813-.524 1.222-.257.408.266.521.817.253 1.223z"/></svg>
        </div>
        <div className="header-text">
            <p className='date'>{currentDate.toDateString()}</p>
            <p className='time'>{currentTime}</p>
        </div>
        {paletteClicked && <svg className="dark-mode-dot" onClick={handleDarkModeToggle} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998"/></svg>}
    </div>
  );
}

export default Header;
