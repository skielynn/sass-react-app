import './App.css';
import './sass/styles.scss';
import './css/styles.css';
import Navbar from './components/navbar';



function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="header">MY SASS PROJECT</h1>
        <button className="button">click here!</button>
      </div>
    </div>
  );
}

export default App;
