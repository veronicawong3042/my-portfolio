import React, { useState, useEffect, useContext } from 'react';
import { format } from 'date-fns';
import Palette from './Palette';

function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(format(new Date(), 'hh:mm a'));

  // useEffect(() => {
  //   const dateInterval = setInterval(() => {
  //     setCurrentDate(new Date());
  //   }, 1000);

  //   const timeInterval = setInterval(() => {
  //     setCurrentTime(format(new Date(), 'hh:mm a'));
  //   }, 5000);

  //   return () => {
  //     clearInterval(dateInterval);
  //     clearInterval(timeInterval);
  //   };
  // }, []);

  // const handlePaletteClick = () => {
  //   setPaletteClicked(!paletteClicked);
  // };

  // const handleDarkModeToggle = () => {
  //   setDarkMode(!darkMode); 
  // };

  return (
    <div className="header-content">
        <div className="header-icons">
        <Palette/>
            <svg className='wifi-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.504 13.572l-1.505-1.489c2.201-2.805 5.413-4.583 9.001-4.583s6.8 1.779 9 4.583l-1.504 1.489c-1.835-2.338-4.512-3.822-7.496-3.822s-5.661 1.484-7.496 3.822zm7.496.678c1.791 0 3.397.891 4.498 2.293l1.502-1.488c-1.467-1.869-3.608-3.055-6-3.055s-4.533 1.186-6 3.055l1.502 1.488c1.101-1.402 2.707-2.293 4.498-2.293zm0 2.25c-1.196 0-2.258.602-2.99 1.536l2.99 2.964 2.99-2.963c-.732-.935-1.794-1.537-2.99-1.537zm0-11.25c4.179 0 7.927 2.078 10.495 5.351l1.505-1.491c-2.935-3.739-7.217-6.11-12-6.11s-9.065 2.371-12 6.11l1.505 1.491c2.568-3.273 6.316-5.351 10.495-5.351z"/></svg>
            <svg className='search-icon' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill-rule="nonzero"/></svg>
        </div>
        <div className="header-text">
            <p className='date'>{currentDate.toDateString()}</p>
            <p className='time'>{currentTime}</p>
        </div>
    </div>
  );
}

export default Header;
