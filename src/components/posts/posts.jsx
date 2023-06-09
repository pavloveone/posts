import { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Paginations } from '../paginations/paginations';
import { SearchBar } from '../search-bar/search-bar';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../services/actions/posts';

export const Posts = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const { posts } = useSelector(state => state.posts)

    const dispatch = useDispatch();

    const handleSearch = (term) => {
      setSearchTerm(term);
    }

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container>
        <SearchBar handleSearch={handleSearch} />
            <ListGroup>
                {posts.length > 0 && (
                    <Paginations items={posts} searchTerm={searchTerm} />
                )}
            </ListGroup>
        </Container>
    );
}

