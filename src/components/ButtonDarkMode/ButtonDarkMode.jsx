import { useState } from 'react';
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';
import './style.css';

const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {};

  return (
    <button className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default ButtonDarkMode;
