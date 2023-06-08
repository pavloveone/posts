import { useState, useEffect } from 'react';
import {  Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { apiUrl } from '../../utils/variables';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const AboutUser = () => {

    const [user, setUser] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
        userId && axios.get(`${apiUrl}/users/${userId}`).then((resp) => {
            const userData = resp.data;
            setUser(userData);
        })
    }, [userId])

    return (
        <Container>
            {user && (
                <ListGroup className='my-2'>
                    <ListGroupItem variant='primary'>Имя: {user.name}</ListGroupItem>
                    <ListGroupItem>Ник: {user.username}</ListGroupItem>
                    <ListGroupItem>email: {user.email}</ListGroupItem>
                    <ListGroupItem>адрес: город: {user.address.city} улица: {user.address.street} квартира: {user.address.suite} индекс: {user.address.zipcode}</ListGroupItem>
                    <ListGroupItem>Номер телефона: {user.phone}</ListGroupItem>
                    <ListGroupItem>Вебсайт: {user.website}</ListGroupItem>
                    <ListGroupItem>Компания: {user.company.name}</ListGroupItem>
                </ListGroup>
            )}
        </Container>
    );
}