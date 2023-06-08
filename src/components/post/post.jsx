import { useState } from 'react';
import { Button, Image, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import avatar from '../../images/avatar.png';

const apiUrl = 'https://jsonplaceholder.typicode.com';


export const Post = ({ post }) => {
    
    const [comments, setComments] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const response = (id) => {
        axios.get(`${apiUrl}/comments?postId=${id}`).then((resp) => {
            const allComments = resp.data;
            setComments(allComments);
        })
        setIsVisible(!isVisible)
    }
    return (
        <ListGroupItem key={post.id} variant='secondary' className='my-2'>
            <Image src={avatar} roundedCircle style={{ width: '20%', height: 'auto' }} />
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {!isVisible && (
                <Button onClick={() => response(post.id)} variant="secondary" size="sm" style={{alignSelf: 'center'}}>Комментарии</Button>
            )}
            {isVisible && comments.length > 0 && comments.map(comment => (
                <ul key={comment.id}>
                    <li>{comment.name}</li>
                    <li>{comment.email}</li>
                    <li>{comment.body}</li>
                </ul>
            ))}
            {isVisible && (
                <Button onClick={() => response(post.id)} variant="secondary" size="sm" style={{alignSelf: 'center'}}>Скрыть комментарии</Button>
            )}
        </ListGroupItem>
    );  
}