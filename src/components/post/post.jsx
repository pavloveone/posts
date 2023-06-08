import { useState } from 'react';
import { Button, Image, ListGroupItem, Nav } from 'react-bootstrap';
import axios from 'axios';
import avatar from '../../images/avatar.png';
import { Comment } from '../comment/comment';
import { apiUrl } from '../../utils/variables';


export const Post = ({ post }) => {

    const { id, title, body, userId } = post;
    
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
        <ListGroupItem variant='secondary' className='my-2'>
            <Nav.Link href={`${userId}`}>
                <Image src={avatar} roundedCircle style={{ width: '20%', height: 'auto' }} />
            </Nav.Link>
            <h2>{title}</h2>
            <p>{body}</p>
            {!isVisible && (
                <Button onClick={() => response(id)} variant="secondary" size="sm" style={{alignSelf: 'center'}}>Комментарии</Button>
            )}
            {isVisible && comments.length > 0 && comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
            {isVisible && comments.length > 0 && (
                <Button onClick={() => response(id)} variant="secondary" size="sm" style={{alignSelf: 'center'}}>Скрыть комментарии</Button>
            )}
        </ListGroupItem>
    );  
}