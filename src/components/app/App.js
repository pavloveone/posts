import { AppHeader } from '../app-header/app-header';
import { Posts } from '../posts/posts';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AboutUser } from '../about-user/about-user';
import { AboutMe } from '../about-me/about-me';

function App() {


  return (
    <div className="App container">
      <AppHeader />
      <Routes>
        <Route path='/posts' element={<Posts />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path=':userId' element={<AboutUser />} />
      </Routes>
    </div>
  );
}

export default App;
