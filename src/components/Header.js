import React, {useState, useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import './Header.css';
const Header = ()=>{
    const [darkMode , setDarkMode] = useState(false);
    const {theme ,setTheme } = useContext(ThemeContext)
    const handleClick = () => {
        setDarkMode(!darkMode);
        theme === 'bg-dark' ? setTheme('bg-light') : setTheme('bg-dark') 
    }
    return (
        <div className='Header'>
            <h1>ReactHooks</h1>
            <button 
            type='button'
            className='button-toggle'
            onClick={handleClick}>{!!darkMode ? 'DarkMode' : 'LightMode'} 
             </button>
        </div>
    );
}
export default Header;