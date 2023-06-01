import React, { useState } from 'react';
import '../sass/styles.scss';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState('light'); // Initial theme state

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div>
      <select value={theme} onChange={handleThemeChange}>
        <option value="light">Light Mode</option>
        <option value="dark">Dark Mode</option>
      </select>
    </div>
  );
};

export default ThemeSwitch;
