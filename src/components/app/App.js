import { useState } from 'react';
import { AppHeader } from '../app-header/app-header';
import { Posts } from '../posts/posts';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AboutUser } from '../about-user/about-user';
import { SearchBar } from '../search-bar/search-bar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  return (
    <div className="App container">
      <AppHeader />
      <SearchBar handleSearch={handleSearch} />
      <Routes>
        <Route path='/posts' element={<Posts searchTerm={searchTerm} />} />
        <Route path=':userId' element={<AboutUser />} />
      </Routes>
    </div>
  );
}

export default App;
