import { Pagination } from 'react-bootstrap';
import { useState } from 'react';
import { Post } from '../post/post'

export const Paginations = ({ items }) => {

  const [currentPage, setCurrentPage] = useState(1);


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

    return items.slice(start, end).map((post) => <Post key={post.id} post={post} />);
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Pagination.Item key={i} id={i} onClick={handleClick} active={i === currentPage}>
          {i}
        </Pagination.Item>
      );
    }

    return pageNumbers;
  }

  return (
    <div>
      <ul>
        {renderItems()}
      </ul>
      <Pagination>
        <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
        {renderPageNumbers()}
        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
    </div>
  );
}