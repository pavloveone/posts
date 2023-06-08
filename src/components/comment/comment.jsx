import { ListGroup, ListGroupItem } from 'react-bootstrap';

export const Comment = ({ comment }) => {

    const { body, name, email } = comment;

    return (
        <ListGroup className='my-2'>
            <ListGroupItem variant='info'><b>{name}</b> ({email})</ListGroupItem>
            <ListGroupItem>{body}</ListGroupItem>
        </ListGroup>
    );
}