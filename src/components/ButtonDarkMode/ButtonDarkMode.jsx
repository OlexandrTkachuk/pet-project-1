import { useEffect, useState, useRef } from 'react';
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';
import './style.css';

const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      window.document.body.classList.add('dark');
      btnRef.current.classList.add('dark-mode-btn--active');
    } else {
      window.document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default ButtonDarkMode;
