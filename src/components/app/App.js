import { AppHeader } from '../app-header/app-header';
import { Posts } from '../posts/posts';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AboutUser } from '../about-user/about-user';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path='/posts' element={<Posts />} />
        <Route path=':userId' element={<AboutUser />} />
      </Routes>
    </div>
  );
}

export default App;
