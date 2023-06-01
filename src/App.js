import './App.css';
import './sass/styles.scss';
import './css/styles.css';
import Navbar from './components/navbar';
import ThemeSwitch from './components/themeswitch';
import { useState } from 'react';



function App() {
  const [theme, setTheme] = useState('light'); 

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };
  return (
    <div className={`theme-${theme}`}>
    <div className="theme-switch">
      <select value={theme} onChange={handleThemeChange}>
        <option value="light">Light Mode</option>
        <option value="dark">Dark Mode</option>
      </select>
    </div>
      <Navbar />
      <div className="container">
        <h1 className="header">MY SASS PROJECT</h1>
        <button className="button">click here!</button>
      </div>
    </div>
  );
}

export default App;
