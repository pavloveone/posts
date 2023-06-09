import { useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

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
        placeholder="Search"
        value={searchText}
        onChange={handleChange}
      />
      <Button variant='outline-secondary' onClick={handleClear}>
        &times;
      </Button>
      <Button variant='primary' onClick={handleSubmit}>
        Search
      </Button>
    </InputGroup>
  );
}