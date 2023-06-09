import { useState, useEffect } from 'react';
import {  Button, Container, ListGroup, ListGroupItem, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Post } from '../post/post';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../services/actions/user';
import { getUsersPosts } from '../../services/actions/users-posts';


export const AboutUser = () => {

    const dispatch = useDispatch();
    const { userId } = useParams();

    const { user } = useSelector(state => state.user)
    const { usersPosts } = useSelector(state => state.usersPosts)

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        dispatch(getUser(userId))
    }, [dispatch, userId])

    const getPosts = (userId) => {
        dispatch(getUsersPosts(userId))
        setIsVisible(!isVisible)
    }
    return (
        <Container>
            {user && (
                <ListGroup className='my-2'>
                    <Nav className="mr-auto">
                        <Nav.Link href='/posts' style={{ width: '20%' }} variant='secondary'>Назад</Nav.Link>
                    </Nav>
                    <ListGroupItem variant='primary'>Имя: {user.name}</ListGroupItem>
                    <ListGroupItem>Ник: {user.username}</ListGroupItem>
                    <ListGroupItem>email: {user.email}</ListGroupItem>
                    <ListGroupItem>Адрес: г. {user.address.city}, ул. {user.address.street}, кв.{user.address.suite}, индекс: {user.address.zipcode}</ListGroupItem>
                    <ListGroupItem>Номер телефона: {user.phone}</ListGroupItem>
                    <ListGroupItem>Вебсайт: {user.website}</ListGroupItem>
                    <ListGroupItem>Компания: {user.company.name}</ListGroupItem>
                    <Button onClick={() => getPosts(userId)} className='mt-2' style={{ width: '40%' }} variant='primary'>{!isVisible ? 'Все посты пользователя' : 'Скрыть все посты пользователя'}</Button>
                    {usersPosts.length > 0 && isVisible && usersPosts.map(post => (
                        <Post key={post.id} post={post} />
                    ))}
                </ListGroup>
            )}
        </Container>
    );
}