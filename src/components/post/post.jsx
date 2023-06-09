import { useState } from 'react';
import { Button, Image, ListGroupItem, Nav } from 'react-bootstrap';
import avatar from '../../images/avatar.png';
import { Comment } from '../comment/comment';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../services/actions/comments';


export const Post = ({ post }) => {

    const { id, title, body, userId } = post;

    const dispatch = useDispatch();
    
    const { comments } = useSelector(state => state.comments)
    const [isVisible, setIsVisible] = useState(false);

    const response = (id) => {
        dispatch(getComments(id))
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