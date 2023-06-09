import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { AppHeader } from '../app-header/app-header';
import { Posts } from '../posts/posts';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AboutUser } from '../about-user/about-user';
import { AboutMe } from '../about-me/about-me';

function App() {

  const [showSpinner, setShowSpinner] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="App container">
      <AppHeader />
      {showSpinner && <Spinner style={{ position: 'absolute', top: '20%', left: '50%' }} animation="border" />}
      {!showSpinner && (
        <Routes>
          <Route path='/posts' element={<Posts />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path=':userId' element={<AboutUser />} />
      </Routes>
      )}
    </div>
  );
}

export default App;
