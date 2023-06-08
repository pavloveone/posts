import { AppHeader } from '../app-header/app-header';
import { Posts } from '../posts/posts';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
