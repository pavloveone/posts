import { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

export const SearchBar = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleClear = () => {
    setSearchText('');
    handleSearch('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
  }

  return (
    <InputGroup className="mb-2 mt-4">
      <FormControl
        placeholder="Search by post title"
        value={searchText}
        onChange={handleChange}
      />
      <button className="btn btn-outline-secondary" onClick={handleClear}>
        &times;
      </button>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Search
      </button>
    </InputGroup>
  );
}