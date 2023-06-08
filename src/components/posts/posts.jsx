import { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Post } from '../post/post'
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';


export const Posts = () => {
    
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
                { posts.length > 0 && posts.map(post => (
                    <Post post={post} />
                ))}
            </ListGroup>
        </Container>
    );
}

