import { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { apiUrl } from '../../utils/variables';
import { Paginations } from '../paginations/paginations';

export const Posts = ({ searchTerm }) => {
    
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
    axios.get(`${apiUrl}/posts`).then((resp) => {
        const allPosts = resp.data;
        setPosts(allPosts);
    });
    }, [setPosts]);

    return (
        <Container>
            <ListGroup>
                {posts.length > 0 && (
                    <Paginations items={posts} searchTerm={searchTerm} />
                )}
            </ListGroup>
        </Container>
    );
}

