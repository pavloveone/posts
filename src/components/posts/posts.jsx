import { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Post } from '../post/post'
import axios from 'axios';
import { apiUrl } from '../../utils/variables';


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
                    <Post key={post.id} post={post} />
                ))}
            </ListGroup>
        </Container>
    );
}

