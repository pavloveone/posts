import { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { apiUrl } from '../../utils/variables';
import { Paginations } from '../paginations/paginations';
import { SearchBar } from '../search-bar/search-bar';

export const Posts = () => {
    
    const [ posts, setPosts ] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
      setSearchTerm(term);
    }

    useEffect(() => {
    axios.get(`${apiUrl}/posts`).then((resp) => {
        const allPosts = resp.data;
        setPosts(allPosts);
    });
    }, [setPosts]);

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

