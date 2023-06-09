import { Pagination, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Post } from '../post/post'
import { sortPosts } from '../../utils/variables';

export const Paginations = ({ items, searchTerm }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [sortDirection, setSortDirection] = useState('asc');

  items =  !!searchTerm ? items && items.filter(element => element.title.includes(searchTerm)) : searchTerm ? [] : !searchTerm  && items

  const sortedPosts = sortPosts(items, sortDirection);

  const handleSortClick = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(items.length  / itemsPerPage);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pageItems = [];
  for (let i = 1; i <= totalPages; i++) {
    pageItems.push(
      <Pagination.Item key={i} active={i === currentPage} onClick={() => handleClick(i)}>
        {i}
      </Pagination.Item>
    );
  }
  const renderItems = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return items && sortedPosts.slice(start, end).map((post) => <Post key={post.id} post={post} />);
  }

  return (
    <>
      {items.length > 0 && (
        <Button style={{ width: '120px' }} size="sm" variant="primary" onClick={handleSortClick}>Sort by Title</Button>
      )}
      {renderItems()}
      {items.length > 0 && (
      <Pagination>
        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} />
      </Pagination>
      )}
    </>
  );
}