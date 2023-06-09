import { useState, useEffect } from 'react';
import {  Button, Container, ListGroup, ListGroupItem, Nav } from 'react-bootstrap';
import { apiUrl } from '../../utils/variables';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Post } from '../post/post';


export const AboutUser = () => {

    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState([])
    const [isVisible, setIsVisible] = useState(false);
    const { userId } = useParams();

    useEffect(() => {
        userId && axios.get(`${apiUrl}/users/${userId}`).then((resp) => {
            const userData = resp.data;
            setUser(userData);
        })
    }, [userId])

    const getPosts = (userId) => {
        !!user && axios.get(`${apiUrl}/users/${userId}/posts`).then((resp) => {
            const postsData = resp.data;
            setUserPosts(postsData);
        })
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
                    {userPosts.length > 0 && isVisible && userPosts.map(post => (
                        <Post key={post.id} post={post} />
                    ))}
                </ListGroup>
            )}
        </Container>
    );
}